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
    '#dt-send:disabled,#dt-in:disabled{opacity:.5}'
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

  var btn = el('button', { id: 'dt-btn', type: 'button', 'aria-label': 'Отвори чата за оферти' }, '\u{1F4AC}');
  var panel = el('div', { id: 'dt-panel', role: 'dialog', 'aria-label': 'Чат за оферти' });
  var head = el('div', { id: 'dt-head' });
  head.appendChild(el('span', null, 'DimitTech - запитване за оферта'));
  var closeBtn = el('button', { id: 'dt-close', type: 'button', 'aria-label': 'Затвори чата' }, '×');
  head.appendChild(closeBtn);

  var note = el('div', { id: 'dt-note' });
  note.appendChild(document.createTextNode('Разговаряте с AI асистент. Не споделяйте пароли или лични документи. Офертата се одобрява от човек преди изпращане. Данните ви се ползват само за изготвяне на офертата. '));
  note.appendChild(el('a', { href: 'privacy.html' }, 'Поверителност'));

  var log = el('div', { id: 'dt-log', 'aria-live': 'polite' });
  var form = el('form', { id: 'dt-form' });
  var input = el('input', { id: 'dt-in', type: 'text', maxlength: '700', placeholder: 'Напишете съобщение (до 100 думи)...', autocomplete: 'off', 'aria-label': 'Вашето съобщение' });
  var send = el('button', { id: 'dt-send', type: 'submit' }, 'Изпрати');
  form.appendChild(input); form.appendChild(send);
  [head, note, log, form].forEach(function (n) { panel.appendChild(n); });
  document.body.appendChild(panel);
  document.body.appendChild(btn);

  var messages = [];
  var finished = false;
  var started = false;

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
        body: JSON.stringify({ messages: messages })
      });
      var data = await r.json();
      if (!r.ok) { var er = new Error('http'); er.userMsg = data && data.error; throw er; }
      messages.push({ role: 'assistant', content: data.reply });
      add('assistant', data.reply);
      if (data.done) {
        finished = true;
        input.placeholder = 'Запитването е изпратено.';
      }
    } catch (e) {
      messages.pop();
      add('assistant', (e && e.userMsg) || 'Възникна грешка. Опитайте отново след малко или пишете на dimitar_beograd@abv.bg.');
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
    if (willOpen && !started) {
      started = true;
      add('assistant', 'Здравейте! Аз съм AI асистентът на DimitTech. Разкажете ми какъв проект ви трябва (сайт, поддръжка, тестване) и ще подготвя запитване за оферта.');
    }
    if (willOpen) input.focus(); else btn.focus();
  }

  btn.addEventListener('click', function () { toggle(); });
  closeBtn.addEventListener('click', function () { toggle(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) toggle(false);
  });
})();
