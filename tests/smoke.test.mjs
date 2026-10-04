import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const REPO_ROOT = process.cwd();

test('(a) Live URLs return HTTP 200', async (t) => {
  const urls = [
    'https://dimitarbeograd-qa.github.io/',
    'https://dimitarbeograd-qa.github.io/privacy.html',
    'https://dimitarbeograd-qa.github.io/i18n.js',
    'https://dimitarbeograd-qa.github.io/chat-widget.js'
  ];

  for (const url of urls) {
    await t.test(`GET ${url}`, async () => {
      const res = await fetch(url);
      assert.strictEqual(
        res.status,
        200,
        `Expected status 200 for ${url}, got ${res.status}`
      );
    });
  }
});

test('(b) index.html and privacy.html have html lang and CSP meta tag without unsafe-eval', () => {
  const files = ['index.html', 'privacy.html'];

  for (const file of files) {
    const filePath = path.join(REPO_ROOT, file);
    assert.ok(fs.existsSync(filePath), `File ${file} should exist`);

    const content = fs.readFileSync(filePath, 'utf8');

    // Check <html ... lang="...">
    const htmlLangMatch = content.match(/<html\s+[^>]*lang=["']([^"']+)["']/i);
    assert.ok(
      htmlLangMatch,
      `${file} must have an <html lang="..."> attribute`
    );
    assert.ok(
      htmlLangMatch[1].trim().length > 0,
      `${file} html lang attribute must not be empty`
    );

    // Check <meta http-equiv="Content-Security-Policy" content="...">
    const cspMatch = content.match(
      /<meta\s+http-equiv=["']Content-Security-Policy["']\s+content=["']([^"']+)["']/i
    );
    assert.ok(
      cspMatch,
      `${file} must have a Content-Security-Policy meta tag`
    );

    const cspContent = cspMatch[1];
    assert.doesNotMatch(
      cspContent,
      /'unsafe-eval'/i,
      `${file} CSP content must NOT contain 'unsafe-eval'`
    );
  }
});

test('(c) Every local href/src in index.html points to an existing file in the repo', () => {
  const indexPath = path.join(REPO_ROOT, 'index.html');
  assert.ok(fs.existsSync(indexPath), 'index.html must exist');

  const content = fs.readFileSync(indexPath, 'utf8');

  // Match href="...", href='...', src="...", src='...'
  const attrRegex = /(?:href|src)=(?:"([^"]+)"|'([^']+)')/gi;
  const localPaths = new Set();

  let match;
  while ((match = attrRegex.exec(content)) !== null) {
    const val = (match[1] || match[2]).trim();

    // Skip anchors, mailto, tel, data URIs, external URLs
    if (
      !val ||
      val.startsWith('#') ||
      val.startsWith('mailto:') ||
      val.startsWith('tel:') ||
      val.startsWith('data:') ||
      val.startsWith('http://') ||
      val.startsWith('https://') ||
      val.startsWith('//')
    ) {
      continue;
    }

    // Strip anchor/query string if any
    const cleanPath = val.split('#')[0].split('?')[0];
    if (cleanPath) {
      localPaths.add(cleanPath);
    }
  }

  // Also check CSS url(...) references in index.html if any local assets are referenced
  const cssUrlRegex = /url\((?:"([^"]+)"|'([^']+)'|([^)'"]+))\)/gi;
  while ((match = cssUrlRegex.exec(content)) !== null) {
    const val = (match[1] || match[2] || match[3]).trim();
    if (
      !val ||
      val.startsWith('#') ||
      val.startsWith('data:') ||
      val.startsWith('http://') ||
      val.startsWith('https://')
    ) {
      continue;
    }
    const cleanPath = val.split('#')[0].split('?')[0];
    if (cleanPath) {
      localPaths.add(cleanPath);
    }
  }

  assert.ok(localPaths.size > 0, 'Should find local href/src paths in index.html');

  for (const relPath of localPaths) {
    const resolvedPath = path.join(REPO_ROOT, relPath);
    assert.ok(
      fs.existsSync(resolvedPath),
      `Referenced file "${relPath}" in index.html does not exist in repo at ${resolvedPath}`
    );
  }
});

test('(d) i18n.js can be loaded as text and its EN dictionary has at least 200 keys', () => {
  const i18nPath = path.join(REPO_ROOT, 'i18n.js');
  assert.ok(fs.existsSync(i18nPath), 'i18n.js must exist');

  const content = fs.readFileSync(i18nPath, 'utf8');
  assert.ok(content.length > 0, 'i18n.js must not be empty');

  // Match the EN dictionary object in i18n.js
  const match = content.match(/var EN = (\{[\s\S]*?\n  \});/);
  assert.ok(match, 'i18n.js must contain a "var EN = { ... };" definition');

  // Evaluate or parse the object
  // Using Function constructor to safely evaluate dictionary object string literal safely
  const dict = new Function(`return ${match[1]};`)();
  const keysCount = Object.keys(dict).length;

  assert.ok(
    keysCount >= 200,
    `Expected EN dictionary in i18n.js to have at least 200 keys, found ${keysCount}`
  );
});

test('(e) robots.txt exists and contains Sitemap URL and allow rule', () => {
  const robotsPath = path.join(REPO_ROOT, 'robots.txt');
  assert.ok(fs.existsSync(robotsPath), 'robots.txt must exist');

  const content = fs.readFileSync(robotsPath, 'utf8');
  assert.match(content, /User-agent:\s*\*/i);
  assert.match(content, /Allow:\s*\//i);
  assert.match(
    content,
    /Sitemap:\s*https:\/\/dimitarbeograd-qa\.github\.io\/sitemap\.xml/i
  );
});

test('(f) sitemap.xml exists and lists all public root HTML files', () => {
  const sitemapPath = path.join(REPO_ROOT, 'sitemap.xml');
  assert.ok(fs.existsSync(sitemapPath), 'sitemap.xml must exist');

  const content = fs.readFileSync(sitemapPath, 'utf8');
  assert.match(content, /<urlset\s+xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);

  const htmlFiles = fs
    .readdirSync(REPO_ROOT)
    .filter((f) => f.endsWith('.html'));

  for (const htmlFile of htmlFiles) {
    assert.ok(
      content.includes(`https://dimitarbeograd-qa.github.io/${htmlFile}`),
      `sitemap.xml must include URL for ${htmlFile}`
    );
  }
});
