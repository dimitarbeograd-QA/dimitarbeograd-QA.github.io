// DimitTech - чат за запитвания за оферта.
// Вграждане: <script src="chat-widget.js" data-worker="https://ИМЕ.workers.dev" defer></script>
(function () {
  var script = document.currentScript;
  var WORKER = script && script.dataset.worker;
  if (!WORKER) { console.error('chat-widget: липсва data-worker'); return; }

  var css = [
    '#dt-btn{position:fixed;right:16px;bottom:16px;width:56px;height:56px;border-radius:50%;border:0;background:#00D4FF;color:#050A14;font-size:24px;cursor:pointer;z-index:9998;box-shadow:0 4px 18px rgba(0,212,255,.35)}',
    '#dt-btn:focus-visible,#dt-send:focus-visible,#dt-close:focus-visible{outline:2px solid #fff;outline-offset:2px}',
    '#dt-panel{position:fixed;right:16px;bottom:84px;width:360px;max-width:calc(100vw - 32px);height:500px;max-height:calc(100vh - 110px);background:#0C1526;color:#E8EDF5;border:1px solid rgba(0,212,255,.25);border-radius:14px;display:none;flex-direction:column;z-index:9999;font:14px/1.45 "DM Sans",system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.5)}',
    '#dt-panel.open{display:flex}',
    '#dt-head{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:#00D4FF;color:#050A14;border-radius:13px 13px 0 0;font-weight:700}',
    '#dt-close{background:transparent;border:0;color:#050A14;font-size:20px;line-height:1;cursor:pointer;padding:0 4px}',
    '#dt-note{padding:8px 12px;font-size:12px;color:#8FA0BA;background:#111E35;border-bottom:1px solid rgba(0,212,255,.18)}',
    '#dt-note a{color:#00D4FF}',
    '#dt-log{flex:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column;gap:8px}',
    '.dt-m{padding:8px 10px;border-radius:10px;max-width:85%;white-space:pre-wrap;word-wrap:break-word}',
    '.dt-u{align-self:flex-end;background:#0066FF;color:#fff}',
    '.dt-a{align-self:flex-start;background:#111E35;color:#E8EDF5}',
    '#dt-form{display:flex;gap:6px;padding:8px;border-top:1px solid rgba(0,212,255,.18)}',
    '#dt-in{flex:1;min-width:0;padding:8px;border:1px solid rgba(0,212,255,.25);border-radius:8px;background:#050A14;color:#E8EDF5;font:inherit}',
    '#dt-send{padding:8px 12px;border:0;border-radius:8px;background:#00D4FF;color:#050A14;font-weight:700;cursor:pointer}',
    '#dt-send:disabled,#dt-in:disabled{opacity:.5}',
    '#dt-contact{display:none;flex:1;flex-direction:column;gap:8px;padding:12px;overflow-y:auto}',
    '#dt-contact.show{display:flex}',
    '#dt-contact label{font-size:12px;color:#8FA0BA}',
    '#dt-contact input{padding:8px;border:1px solid rgba(0,212,255,.25);border-radius:8px;background:#050A14;color:#E8EDF5;font:inherit;width:100%;box-sizing:border-box}',
    '#dt-err{color:#ff8a8a;font-size:12px;min-height:16px}',
    '#dt-go{padding:9px 12px;border:0;border-radius:8px;background:#00D4FF;color:#050A14;font-weight:700;cursor:pointer}'
  ].join('');
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in (attrs || {})) e.setAttribute(k, attrs[k]);
    if (text) e.textContent = text;
    return e;
  }

  var TX = {
    bg: {
      open: 'Отвори чата за оферти', panel: 'Чат за оферти', title: 'DimitTech - запитване за оферта', close: 'Затвори чата',
      note: 'Разговаряте с AI асистент. Не споделяйте пароли или лични документи. Офертата се одобрява от човек преди изпращане. Данните ви се ползват само за изготвяне на офертата. ',
      privacy: 'Поверителност', intro: 'Първо оставете данни за обратна връзка (ще ги ползваме само за офертата):',
      lName: 'Име', lMail: 'Имейл', lPhone: 'Телефон', phName: 'Вашето име', go: 'Започни чата',
      ph: 'Напишете съобщение (до 100 думи)...', aria: 'Вашето съобщение', send: 'Изпрати', done: 'Запитването е изпратено.',
      err: 'Възникна грешка. Опитайте отново след малко или пишете на dimitar_beograd@abv.bg.',
      eName: 'Моля, въведете име.', eMail: 'Моля, въведете валиден имейл.', ePhone: 'Моля, въведете валиден телефон.',
      hi: function (n) { return 'Благодаря, ' + n + '! Какъв проект ви трябва? Опишете накратко.'; }
    },
    en: {
      open: 'Open the quote chat', panel: 'Quote chat', title: 'DimitTech - quote request', close: 'Close chat',
      note: 'You are talking to an AI assistant. Do not share passwords or personal documents. A person approves the quote before it is sent. Your data is used only to prepare the quote. ',
      privacy: 'Privacy', intro: 'First leave your contact details (we will use them only for the quote):',
      lName: 'Name', lMail: 'Email', lPhone: 'Phone', phName: 'Your name', go: 'Start chat',
      ph: 'Type a message (up to 100 words)...', aria: 'Your message', send: 'Send', done: 'Your request has been sent.',
      err: 'Something went wrong. Please try again shortly or write to dimitar_beograd@abv.bg.',
      eName: 'Please enter your name.', eMail: 'Please enter a valid email.', ePhone: 'Please enter a valid phone number.',
      hi: function (n) { return 'Thank you, ' + n + '! What project do you need? Please describe it briefly.'; }
    }
  };
  function curLang() {
    var l = window.DT_I18N && window.DT_I18N.lang();
    if (l === 'bg' || l === 'en') return l;
    var nl = ((navigator.languages && navigator.languages[0]) || navigator.language || 'en').toLowerCase();
    return nl.indexOf('bg') === 0 ? 'bg' : 'en';
  }
  function T() { return TX[curLang()]; }

  var btn = el('button', { id: 'dt-btn', type: 'button' }, '\u{1F4AC}');
  var panel = el('div', { id: 'dt-panel', role: 'dialog' });
  var head = el('div', { id: 'dt-head' });
  var headTitle = el('span');
  head.appendChild(headTitle);
  var closeBtn = el('button', { id: 'dt-close', type: 'button' }, '×');
  head.appendChild(closeBtn);

  var note = el('div', { id: 'dt-note' });
  var noteText = document.createTextNode('');
  var noteLink = el('a', { href: 'privacy.html' });
  note.appendChild(noteText);
  note.appendChild(noteLink);

  var contactBox = el('form', { id: 'dt-contact', novalidate: 'novalidate' });
  var labels = {};
  function field(id, key, type, max) { var w = el('div'); labels[key] = el('label', { for: id }); w.appendChild(labels[key]); w.appendChild(el('input', { id: id, type: type, maxlength: max, autocomplete: type === 'email' ? 'email' : (type === 'tel' ? 'tel' : 'name') })); contactBox.appendChild(w); return w.lastChild; }
  var intro = el('div');
  contactBox.appendChild(intro);
  var fName = field('dt-name', 'lName', 'text', '100');
  var fMail = field('dt-mail', 'lMail', 'email', '200'); fMail.setAttribute('placeholder', 'name@example.com');
  var fPhone = field('dt-phone', 'lPhone', 'tel', '20'); fPhone.setAttribute('placeholder', '+359 ...');
  var errBox = el('div', { id: 'dt-err', role: 'alert' });
  contactBox.appendChild(errBox);
  var goBtn = el('button', { id: 'dt-go', type: 'submit' });
  contactBox.appendChild(goBtn);

  var log = el('div', { id: 'dt-log', 'aria-live': 'polite' });
  var form = el('form', { id: 'dt-form' });
  var input = el('input', { id: 'dt-in', type: 'text', maxlength: '700', autocomplete: 'off' });
  var send = el('button', { id: 'dt-send', type: 'submit' });
  form.appendChild(input); form.appendChild(send);
  [head, note, contactBox, log, form].forEach(function (n) { panel.appendChild(n); });
  document.body.appendChild(panel);
  document.body.appendChild(btn);

  function applyLang() {
    var x = T();
    btn.setAttribute('aria-label', x.open); panel.setAttribute('aria-label', x.panel);
    headTitle.textContent = x.title; closeBtn.setAttribute('aria-label', x.close);
    noteText.nodeValue = x.note; noteLink.textContent = x.privacy;
    intro.textContent = x.intro;
    labels.lName.textContent = x.lName; labels.lMail.textContent = x.lMail; labels.lPhone.textContent = x.lPhone;
    fName.setAttribute('placeholder', x.phName); goBtn.textContent = x.go;
    input.setAttribute('placeholder', finished ? x.done : x.ph); input.setAttribute('aria-label', x.aria);
    send.textContent = x.send;
    errBox.textContent = '';
  }
  document.documentElement.lang && document.addEventListener('dt-lang', applyLang);

  var contact = null;
  var messages = [];
  var finished = false;
  var started = false;
  applyLang();

  function add(role, text) {
    var m = el('div', { class: 'dt-m ' + (role === 'user' ? 'dt-u' : 'dt-a') }, text);
    log.appendChild(m);
    log.scrollTop = log.scrollHeight;
  }

  function setBusy(b) { input.disabled = b || finished; send.disabled = b || finished; }

  async function ask() {
    setBusy(true);
    try {
      var r = await fetch(WORKER.replace(/\/$/, '') + '/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: messages, contact: contact, lang: curLang() })
      });
      var data = await r.json();
      if (!r.ok) { var er = new Error('http'); er.userMsg = data && data.error; throw er; }
      messages.push({ role: 'assistant', content: data.reply });
      add('assistant', data.reply);
      if (data.done) {
        finished = true;
        input.placeholder = T().done;
      }
    } catch (e) {
      messages.pop();
      add('assistant', (e && e.userMsg) || T().err);
    }
    setBusy(false);
    if (!finished) input.focus();
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var text = input.value.trim();
    if (!text || finished) return;
    input.value = '';
    messages.push({ role: 'user', content: text });
    add('user', text);
    ask();
  });

  function toggle(open) {
    var willOpen = typeof open === 'boolean' ? open : !panel.classList.contains('open');
    panel.classList.toggle('open', willOpen);
    if (!contact) { contactBox.classList.add('show'); log.style.display = 'none'; form.style.display = 'none'; }
    started = true;
    if (willOpen) { (contact ? input : fName).focus(); } else btn.focus();
  }

  contactBox.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var n = fName.value.trim(), m = fMail.value.trim(), ph = fPhone.value.trim();
    if (n.length < 2) { errBox.textContent = T().eName; fName.focus(); return; }
    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(m)) { errBox.textContent = T().eMail; fMail.focus(); return; }
    if (!/^\+?[\d\s\-()]{6,20}$/.test(ph)) { errBox.textContent = T().ePhone; fPhone.focus(); return; }
    errBox.textContent = '';
    contact = { name: n, email: m, phone: ph };
    contactBox.classList.remove('show'); log.style.display = ''; form.style.display = '';
    add('assistant', T().hi(n));
    input.focus();
  });

  btn.addEventListener('click', function () { toggle(); });
  closeBtn.addEventListener('click', function () { toggle(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) toggle(false);
  });
})();
