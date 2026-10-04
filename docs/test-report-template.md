# Шаблон за доклад от тестове (Test Report Template)

## Обща информация

- **Дата и час на провеждане:** YYYY-MM-DD HH:MM (напр. 2026-10-03 23:15)
- ** Commit (хеш / клон):** `<commit-hash>` / `<branch-name>` (напр. `a1b2c3d` / `agent/DTO-18-smoke-tests`)
- **Изпълнител / Агент:** `<име-на-агента-или-тестера>`
- **Среда:** Node.js v22+ / Linux Sandbox / Live GitHub Pages

---

## Резултати по проверки (Checks Result)

| № | Проверка (Check) | Очакван резултат | Фактически резултат | Статус |
|---|------------------|------------------|---------------------|--------|
| 1 | **Live URLs (HTTP status)**<br>• `https://dimitarbeograd-qa.github.io/`<br>• `/privacy.html`<br>• `/i18n.js`<br>• `/chat-widget.js` | HTTP 200 OK за всички живи URL адреси | _(попълни)_ | PASS / FAIL |
| 2 | **HTML & CSP мета тегове**<br>• `index.html`<br>• `privacy.html` | Наличен `html lang` атрибут; наличен CSP meta tag без `'unsafe-eval'` | _(попълни)_ | PASS / FAIL |
| 3 | **Локални референции (href/src)**<br>• Обхождане на `index.html` | Всички локални ресурси съществуват във файловата система на репото | _(попълни)_ | PASS / FAIL |
| 4 | **Речник за интернационализация**<br>• `i18n.js` | Файлът се зарежда успешно; EN речникът съдържа >= 200 ключа | _(попълни; брой ключове: X)_ | PASS / FAIL |

---

## Намерени бъгове / Проблеми (Bugs Found)

| ID / Jira | Описание | Приоритет | Статус |
|-----------|----------|-----------|--------|
| *Няма* / `<ID>` | *Описание на открит проблем или "Не са открити бъгове по време на тестването"* | Critical / High / Medium / Low | Open / Resolved / N/A |

---

## Бележки и препоръки (Notes & Recommendations)

- _(попълни след пускане на `node --test tests/smoke.test.mjs`)_
