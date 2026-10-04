import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const REPO_ROOT = process.cwd();
const FILES = ['index.html', 'privacy.html'];

function getLineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

function getSnippet(content, index, length = 60) {
  const line = content.slice(index, index + length).replace(/\s+/g, ' ');
  return line.length === length ? line + '...' : line;
}

test('1. HTML lang attribute is present and non-empty', async (t) => {
  for (const file of FILES) {
    await t.test(file, () => {
      const filePath = path.join(REPO_ROOT, file);
      const content = fs.readFileSync(filePath, 'utf8');

      const match = /<html\b[^>]*>/i.exec(content);
      assert.ok(match, `[${file}:1] Missing <html> tag`);

      const htmlTag = match[0];
      const lineNum = getLineNumber(content, match.index);
      const langMatch = /lang=["']([^"']+)["']/i.exec(htmlTag);

      assert.ok(
        langMatch && langMatch[1].trim().length > 0,
        `[${file}:${lineNum}] <html> tag must have a non-empty 'lang' attribute. Found: ${htmlTag}`
      );
    });
  }
});

test('2. Every img tag has an alt attribute', async (t) => {
  for (const file of FILES) {
    await t.test(file, () => {
      const filePath = path.join(REPO_ROOT, file);
      const content = fs.readFileSync(filePath, 'utf8');

      const imgRegex = /<img\b([^>]*)>/gi;
      let match;
      const failures = [];

      while ((match = imgRegex.exec(content)) !== null) {
        const lineNum = getLineNumber(content, match.index);
        const attrs = match[1];
        const hasAlt = /\balt\s*=/i.test(attrs);

        if (!hasAlt) {
          failures.push(`[${file}:${lineNum}] <img> missing 'alt' attribute: "${getSnippet(content, match.index)}"`);
        }
      }

      assert.deepStrictEqual(failures, [], `Found ${failures.length} img tag(s) without alt attribute:\n` + failures.join('\n'));
    });
  }
});

test('3. Every input, select, and textarea has an associated label or aria-label', async (t) => {
  for (const file of FILES) {
    await t.test(file, () => {
      const filePath = path.join(REPO_ROOT, file);
      const content = fs.readFileSync(filePath, 'utf8');

      // Collect all label for="..." values
      const labelForSet = new Set();
      const labelForRegex = /<label\b[^>]*\bfor=["']([^"']+)["'][^>]*>/gi;
      let lMatch;
      while ((lMatch = labelForRegex.exec(content)) !== null) {
        labelForSet.add(lMatch[1].trim());
      }

      // Collect ranges for implicit labels <label> ... </label>
      const implicitLabelRanges = [];
      const labelBlockRegex = /<label\b[^>]*>([\s\S]*?)<\/label>/gi;
      let lbMatch;
      while ((lbMatch = labelBlockRegex.exec(content)) !== null) {
        implicitLabelRanges.push([lbMatch.index, lbMatch.index + lbMatch[0].length]);
      }

      const controlRegex = /<(input|select|textarea)\b([^>]*)>/gi;
      let match;
      const failures = [];

      while ((match = controlRegex.exec(content)) !== null) {
        const lineNum = getLineNumber(content, match.index);
        const tag = match[1].toLowerCase();
        const attrs = match[2];

        // For input tags, check type
        if (tag === 'input') {
          const typeMatch = /\btype=["']([^"']+)["']/i.exec(attrs);
          const type = typeMatch ? typeMatch[1].toLowerCase() : 'text';
          if (['hidden', 'submit', 'button', 'reset', 'image'].includes(type)) {
            continue;
          }
        }

        const hasAriaLabel = /\baria-label\s*=/i.test(attrs);
        const hasAriaLabelledBy = /\baria-labelledby\s*=/i.test(attrs);
        const hasTitle = /\btitle\s*=/i.test(attrs);

        const idMatch = /\bid=["']([^"']+)["']/i.exec(attrs);
        const idVal = idMatch ? idMatch[1].trim() : null;
        const hasExplicitLabel = idVal && labelForSet.has(idVal);

        const isInsideLabel = implicitLabelRanges.some(
          ([start, end]) => match.index >= start && match.index <= end
        );

        if (!hasAriaLabel && !hasAriaLabelledBy && !hasTitle && !hasExplicitLabel && !isInsideLabel) {
          failures.push(`[${file}:${lineNum}] <${tag}> missing associated label or aria-label: "${getSnippet(content, match.index)}"`);
        }
      }

      assert.deepStrictEqual(failures, [], `Found ${failures.length} form control(s) without accessible label:\n` + failures.join('\n'));
    });
  }
});

test('4. Every button and link has text content or accessible label', async (t) => {
  for (const file of FILES) {
    await t.test(file, () => {
      const filePath = path.join(REPO_ROOT, file);
      const content = fs.readFileSync(filePath, 'utf8');

      // Check buttons
      const buttonBlockRegex = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi;
      let match;
      const failures = [];

      while ((match = buttonBlockRegex.exec(content)) !== null) {
        const lineNum = getLineNumber(content, match.index);
        const attrs = match[1];
        const innerHTML = match[2];

        const hasAriaLabel = /\baria-label\s*=/i.test(attrs) || /\baria-labelledby\s*=/i.test(attrs);
        const textContent = innerHTML.replace(/<[^>]*>/g, '').trim();
        const hasImgWithAlt = /<img\b[^>]*\balt=["']([^"']+)["']/i.test(innerHTML);
        const hasSvgWithTitle = /<svg\b[\s\S]*?<title\b[^>]*>[\s\S]*?<\/title>/i.test(innerHTML);

        if (!hasAriaLabel && !textContent && !hasImgWithAlt && !hasSvgWithTitle) {
          failures.push(`[${file}:${lineNum}] <button> lacks accessible text content or aria-label: "${getSnippet(content, match.index)}"`);
        }
      }

      // Check links
      const linkBlockRegex = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
      while ((match = linkBlockRegex.exec(content)) !== null) {
        const lineNum = getLineNumber(content, match.index);
        const attrs = match[1];
        const innerHTML = match[2];

        // Skip anchor-only links without href if any
        if (!/\bhref\s*=/i.test(attrs)) {
          continue;
        }

        const hasAriaLabel = /\baria-label\s*=/i.test(attrs) || /\baria-labelledby\s*=/i.test(attrs);
        const textContent = innerHTML.replace(/<[^>]*>/g, '').trim();
        const hasImgWithAlt = /<img\b[^>]*\balt=["']([^"']+)["']/i.test(innerHTML);
        const hasSvgWithTitle = /<svg\b[\s\S]*?<title\b[^>]*>[\s\S]*?<\/title>/i.test(innerHTML);

        if (!hasAriaLabel && !textContent && !hasImgWithAlt && !hasSvgWithTitle) {
          failures.push(`[${file}:${lineNum}] <a> link lacks accessible text content or aria-label: "${getSnippet(content, match.index)}"`);
        }
      }

      assert.deepStrictEqual(failures, [], `Found ${failures.length} button/link element(s) without accessible text:\n` + failures.join('\n'));
    });
  }
});

test('5. No duplicate ID values in document', async (t) => {
  for (const file of FILES) {
    await t.test(file, () => {
      const filePath = path.join(REPO_ROOT, file);
      const content = fs.readFileSync(filePath, 'utf8');

      const idRegex = /\bid=["']([^"']+)["']/gi;
      let match;
      const idMap = new Map();
      const failures = [];

      while ((match = idRegex.exec(content)) !== null) {
        const idVal = match[1].trim();
        const lineNum = getLineNumber(content, match.index);

        if (idMap.has(idVal)) {
          const firstLine = idMap.get(idVal);
          failures.push(`[${file}:${lineNum}] Duplicate id="${idVal}" (first defined on line ${firstLine})`);
        } else {
          idMap.set(idVal, lineNum);
        }
      }

      assert.deepStrictEqual(failures, [], `Found duplicate ID(s):\n` + failures.join('\n'));
    });
  }
});

test('6. Exactly one h1 per document', async (t) => {
  for (const file of FILES) {
    await t.test(file, () => {
      const filePath = path.join(REPO_ROOT, file);
      const content = fs.readFileSync(filePath, 'utf8');

      const h1Regex = /<h1\b[^>]*>/gi;
      let match;
      const h1Lines = [];

      while ((match = h1Regex.exec(content)) !== null) {
        const lineNum = getLineNumber(content, match.index);
        h1Lines.push(lineNum);
      }

      assert.strictEqual(
        h1Lines.length,
        1,
        `[${file}] Document must have exactly one <h1> tag, but found ${h1Lines.length} (at line(s): ${h1Lines.length ? h1Lines.join(', ') : 'none'})`
      );
    });
  }
});

test('7. Heading levels do not skip', async (t) => {
  for (const file of FILES) {
    await t.test(file, () => {
      const filePath = path.join(REPO_ROOT, file);
      const content = fs.readFileSync(filePath, 'utf8');

      const headingRegex = /<h([1-6])\b[^>]*>/gi;
      let match;
      let lastLevel = 0;
      const failures = [];

      while ((match = headingRegex.exec(content)) !== null) {
        const level = parseInt(match[1], 10);
        const lineNum = getLineNumber(content, match.index);

        if (lastLevel > 0 && level > lastLevel + 1) {
          failures.push(
            `[${file}:${lineNum}] Heading level skipped from h${lastLevel} to h${level}: "${getSnippet(content, match.index)}"`
          );
        }
        lastLevel = level;
      }

      assert.deepStrictEqual(failures, [], `Found heading level skip(s):\n` + failures.join('\n'));
    });
  }
});

test('8. Links with target="_blank" have rel containing "noopener"', async (t) => {
  for (const file of FILES) {
    await t.test(file, () => {
      const filePath = path.join(REPO_ROOT, file);
      const content = fs.readFileSync(filePath, 'utf8');

      const linkRegex = /<a\b([^>]*)>/gi;
      let match;
      const failures = [];

      while ((match = linkRegex.exec(content)) !== null) {
        const lineNum = getLineNumber(content, match.index);
        const attrs = match[1];

        const targetMatch = /\btarget=["']([^"']+)["']/i.exec(attrs);
        if (targetMatch && targetMatch[1].toLowerCase() === '_blank') {
          const relMatch = /\brel=["']([^"']+)["']/i.exec(attrs);
          const relVal = relMatch ? relMatch[1].toLowerCase() : '';

          if (!relVal.includes('noopener')) {
            failures.push(
              `[${file}:${lineNum}] <a> tag with target="_blank" missing rel="noopener": "${getSnippet(content, match.index)}"`
            );
          }
        }
      }

      assert.deepStrictEqual(failures, [], `Found target="_blank" link(s) without rel="noopener":\n` + failures.join('\n'));
    });
  }
});
