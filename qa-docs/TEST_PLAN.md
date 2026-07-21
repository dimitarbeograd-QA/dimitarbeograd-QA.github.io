# Test Plan — DimitTech (dimitga4qa.github.io)

## 1. Обхват
Бизнес сайт „DimitTech — IT Solutions & Innovation" с секции: Hero, Услуги
(9 карти), Процес, Технологии, Сигурност, QA, Remote Assistance и Контактна
форма. Статичен сайт (GitHub Pages), с CSP и множество security headers,
responsive nav с mobile drawer и валидирана контактна форма с honeypot
anti-spam защита.

## 2. Цели на тестването
- Контактната форма да валидира правилно входните полета и да предотвратява спам.
- Навигацията (desktop + mobile burger меню) да работи безпроблемно.
- Security header-ите (CSP, X-Frame-Options, Permissions-Policy) да не чупят легитимна функционалност.
- Всички секции да са responsive на различни резолюции.
- Reveal анимациите (scroll-triggered) да не блокират достъпа до съдържанието.

## 3. Тестова среда
| Компонент | Детайли |
|---|---|
| Браузъри | Chrome, Firefox, Edge, Safari |
| Устройства | Desktop, Tablet (900px breakpoint), Mobile (520px, 640px breakpoints) |
| Hosting | Статичен сайт (вероятно GitHub Pages) |

## 4. Видове тестове
1. **Функционално** — форма, навигация, mobile drawer, anchor линкове.
2. **UI/UX & Responsive** — breakpoints при 900px, 640px, 520px.
3. **Security** — CSP не блокира легитимни ресурси; honeypot полето хваща ботове, не реални потребители.
4. **Валидация на форма** — required полета, валиден email формат, error/success съобщения.
5. **Достъпност (a11y)** — aria-label/aria-expanded на burger менюто, контраст на текста.
6. **Cross-browser** — рендиране на градиенти, blur ефекти, SVG лого.

## 5. Критерии за приемане
- Формата не позволява подаване с невалиден email или празни задължителни полета.
- Honeypot полето (hp-field) е скрито за реални потребители и не пречи на tab-навигацията по нежелан начин.
- Mobile drawer менюто се отваря/затваря без да остава „заклещено" (stuck) състояние.
- Няма конзолни грешки, свързани с CSP violations, при нормална употреба.

## 6. Изходни артефакти
- `TEST_CASES.md` — детайлни тест кейсове.
- Bug report-и през `.github/ISSUE_TEMPLATE/bug_report.md`.
