// Google Analytics 4 — зарежда се САМО след изрично съгласие (Приемам).
// Без съгласие не се изпраща нищо към Google и не се пишат бисквитки.
(function () {
  'use strict';
  var GA_ID = 'G-8Q2CEZEKSY';
  var KEY = 'dt_consent';
  var loaded = false;

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function lang() {
    try { var s = localStorage.getItem('dt_lang'); if (s === 'bg' || s === 'en') return s; } catch (e) {}
    return (navigator.language || 'bg').toLowerCase().indexOf('bg') === 0 ? 'bg' : 'en';
  }

  function loadGA() {
    if (loaded) return; loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true, allow_google_signals: false, allow_ad_personalization_signals: false });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function clearGA() {
    // изтрива Google Analytics бисквитките при отказ/оттегляне
    var host = location.hostname;
    document.cookie.split(';').forEach(function (c) {
      var n = c.split('=')[0].trim();
      if (n === '_ga' || n.indexOf('_ga_') === 0 || n === '_gid') {
        document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + host;
      }
    });
    window['ga-disable-' + GA_ID] = true;
  }

  var T = {
    bg: {
      t: 'Бисквитки и статистика',
      p: 'Използвам Google Analytics само за да виждам колко хора посещават сайта. Зарежда се само ако приемеш. Подробности: ',
      l: 'Поверителност',
      a: 'Приемам', d: 'Отказвам', s: 'Бисквитки'
    },
    en: {
      t: 'Cookies and statistics',
      p: 'I use Google Analytics only to see how many people visit the site. It loads only if you accept. Details: ',
      l: 'Privacy',
      a: 'Accept', d: 'Decline', s: 'Cookies'
    }
  };

  function banner() {
    var old = document.getElementById('dt-consent'); if (old) old.remove();
    var t = T[lang()];
    var b = document.createElement('div');
    b.id = 'dt-consent';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', t.t);
    b.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483000;max-width:560px;margin:0 auto;background:#10161f;color:#e8eef5;border:1px solid #2a3a4d;border-radius:12px;padding:14px 16px;font:14px/1.45 system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.4)';
    var h = document.createElement('strong'); h.textContent = t.t; h.style.display = 'block';
    var p = document.createElement('span'); p.textContent = t.p;
    var a = document.createElement('a'); a.href = 'privacy.html'; a.textContent = t.l; a.style.color = '#7cc4ff';
    var row = document.createElement('div'); row.style.cssText = 'display:flex;gap:8px;margin-top:10px;flex-wrap:wrap';
    function btn(txt, primary, fn) {
      var x = document.createElement('button'); x.type = 'button'; x.textContent = txt;
      x.style.cssText = 'cursor:pointer;border-radius:8px;padding:8px 16px;font:inherit;font-weight:600;border:1px solid #3b7ddd;' + (primary ? 'background:#3b7ddd;color:#fff' : 'background:transparent;color:#e8eef5');
      x.onclick = fn; return x;
    }
    row.appendChild(btn(t.a, true, function () { set('granted'); b.remove(); loadGA(); }));
    row.appendChild(btn(t.d, false, function () { set('denied'); b.remove(); clearGA(); }));
    p.appendChild(a);
    b.appendChild(h); b.appendChild(p); b.appendChild(row);
    document.body.appendChild(b);
  }

  function init() {
    var c = get();
    if (c === 'granted') loadGA();
    else if (c !== 'denied') banner();
    var els = document.querySelectorAll('[data-cookie-settings]');
    for (var i = 0; i < els.length; i++) {
      els[i].addEventListener('click', function (e) { e.preventDefault(); banner(); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
