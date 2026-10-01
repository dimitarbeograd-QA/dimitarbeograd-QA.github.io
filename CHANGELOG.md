# Changelog

Форматът следва приблизително [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]
### Fixed
- При празно изпращане на формата празните задължителни полета вече се маркират с грешка.
- Контактната форма вече не показва фалшиво „изпратено". Без `FORM_ENDPOINT` отваря имейл клиента (`mailto:`); с него праща реално през `fetch` и показва грешка при неуспех.

### Changed
- Секция „Сигурност" е пренаписана с реалните мерки; документацията е синхронизирана.

### Removed
- Плаващият бадж ЗАЩИТЕН САЙТ — безпредметно твърдение за сигурност.
- Фалшивият CSRF токен и `<meta>` таговете без ефект (`X-Frame-Options`, `Permissions-Policy`, `X-Content-Type-Options`, `Cache-Control`).
### Added
- Пълна QA документация (`qa-docs/TEST_PLAN.md`, `TEST_CASES.md`) и bug report темплейт.
- Технически документи: `README.md`, `ARCHITECTURE.md`, `SECURITY.md`, `CONTRIBUTING.md`, `CHANGELOG.md`.

## Преди този журнал
По-ранните промени не са документирани тук — виж `git log` за пълна история.
