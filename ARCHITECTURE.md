# Архитектура — DimitTech

## Общ преглед
Едностраничен статичен сайт (`index.html`) с inline CSS (CSS custom
properties за тема) и малко JS за nav toggle, reveal анимации и форма
валидация. Няма backend — формата вероятно праща заявка към външен
endpoint/service (провери `<script>` логиката за submit handler-а).

## Основни секции
| Секция | Отговорност |
|---|---|
| `.topbar` | Контактна лента (email, телефон, адрес, работно време) |
| `nav` + `.nav-mobile` | Навигация, mobile drawer меню |
| `.hero` | Основно съобщение + service preview pills |
| `.services` | 9 service карти |
| `.process` | 4-стъпков работен процес |
| `.tech` | Технологичен стек (pills) |
| `.security-section` | Изредени security мерки (CSP, HTTPS, honeypot, статичен сайт) |
| `.qa-section` | QA услуги на компанията |
| `.remote-section` | Remote assistance услуги |
| `.contact` | Контактна форма с валидация + honeypot |

## Security мерки в `<head>`
Content-Security-Policy и Referrer-Policy (като `<meta>` тагове). Истински HTTP
headers (X-Frame-Options, Permissions-Policy и др.) не могат да се задават на
GitHub Pages — виж `SECURITY.md`.

## Препоръки за бъдещо развитие
- Ако формата праща данни към реален backend/email service, документирай
  endpoint-а тук (без да разкриваш ключове/секрети в repo-то).
- При растеж на съдържанието (повече услуги/секции), обмисли извеждане на
  текстовото съдържание в отделен data файл за по-лесна редакция.

## Чат за оферти
`chat-widget.js` (зарежда се от `index.html`, адресът на backend-а е в атрибута `data-worker`) вика Cloudflare Worker `dimittech-offers`. Worker-ът (код и настройки в отделна папка извън това репо) праща разговора към Claude, пази чернова на запитването 30 дни в Cloudflare KV (ЕС) и я изпраща на собственика в Telegram. Нищо не се праща на клиента без одобрение. В CSP само `connect-src` позволява адреса на Worker-а. Тайни ключове няма в това репо.
