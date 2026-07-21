# Security Policy

## Докладване на уязвимост
Ако откриеш уязвимост в този сайт, моля не отваряй публичен Issue.
Свържи се директно: **dimitar_beograd@abv.bg**

## Вече внедрени мерки (виж `<head>` в `index.html`)
- Content-Security-Policy (ограничава script/style/img източници)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY (anti-clickjacking)
- Permissions-Policy (блокира camera/microphone/geolocation/payment/usb)
- Referrer-Policy: strict-origin-when-cross-origin
- Honeypot поле в контактната форма (anti-spam)

## Известни съображения
- `script-src 'self' 'unsafe-inline'` в CSP позволява inline скриптове — това
  е по-слабо от nonce/hash-базиран CSP, но е приемливо за статичен сайт без
  потребителски генерирано съдържание. Ако сайтът започне да рендира
  потребителски input, преразгледай тази политика.
- Ако контактната форма праща данни към външен endpoint, увери се, че той е
  зареден през HTTPS и не изтича лични данни в URL параметри.

## Обхват
Този документ покрива само кода в това repo.
