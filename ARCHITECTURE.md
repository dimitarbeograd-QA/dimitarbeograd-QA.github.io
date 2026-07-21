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
| `.security-section` | Изредени security мерки (CSP, HSTS, CSRF и др.) |
| `.qa-section` | QA услуги на компанията |
| `.remote-section` | Remote assistance услуги |
| `.contact` | Контактна форма с валидация + honeypot |

## Security headers (вече конфигурирани в `<head>`)
CSP, X-Content-Type-Options, X-Frame-Options, Permissions-Policy,
Referrer-Policy — виж `SECURITY.md` за детайли.

## Препоръки за бъдещо развитие
- Ако формата праща данни към реален backend/email service, документирай
  endpoint-а тук (без да разкриваш ключове/секрети в repo-то).
- При растеж на съдържанието (повече услуги/секции), обмисли извеждане на
  текстовото съдържание в отделен data файл за по-лесна редакция.
