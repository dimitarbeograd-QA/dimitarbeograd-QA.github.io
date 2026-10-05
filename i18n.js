// DimitTech - двуезичен сайт (BG / EN).
// Езикът се определя от запазения избор (localStorage 'dt_lang'), иначе от езика на браузъра:
// български -> български, всичко останало -> английски. Статичният HTML е на български.
(function () {
  'use strict';
  var EN = {
    // ===== index.html =====
    "DimitTech — персонализирани IT решения, уеб разработка, cloud, AI и киберсигурност. Гр. Лом, България.": "DimitTech — custom IT solutions, web development, cloud, AI and cybersecurity. Lom, Bulgaria.",
    "Меню": "Menu",
    "Навигация": "Navigation",
    "Иван Иванов": "John Smith",
    "Уеб разработка, AI, Cloud...": "Web development, AI, Cloud...",
    "Разкажи ни за проекта си...": "Tell us about your project...",
    "Гр. Лом": "Lom",
    "Пон – Пет: 08:00 – 17:00": "Mon – Fri: 08:00 – 17:00 (Bulgaria time)",
    "Услуги": "Services",
    "Процес": "Process",
    "Технологии": "Technologies",
    "Сигурност": "Security",
    "Тест": "Test",
    "Контакти": "Contact",
    "Свържи се →": "Get in touch →",
    "Трансформираме бизнеса ти с": "We transform your business with",
    "умни технологии": "smart technology",
    "Персонализирани IT решения, които ускоряват растежа, автоматизират процесите и превръщат данните в конкурентно предимство.": "Custom IT solutions that speed up growth, automate processes and turn data into a competitive advantage.",
    "Услугите ни": "Our services",
    "Безплатна консултация": "Free consultation",
    "Уеб разработка": "Web development",
    "Сайтове и уеб приложения": "Websites and web apps",
    "Мобилни приложения": "Mobile apps",
    "iOS и Android": "iOS and Android",
    "Cloud решения": "Cloud solutions",
    "AI & Автоматизация": "AI & Automation",
    "Умни процеси": "Smart processes",
    "Киберсигурност": "Cybersecurity",
    "Защита и мониторинг": "Protection and monitoring",
    "IT Консултации": "IT Consulting",
    "Стратегия и трансформация": "Strategy and transformation",
    "QA Тестване": "QA Testing",
    "Автоматизирано и ръчно": "Automated and manual",
    "Отдалечена поддръжка 24/7": "Remote support 24/7",
    "Бизнес концепция": "Business concept",
    "От идея до готов план": "From idea to a ready plan",
    "Какво правим": "What we do",
    "Пълен спектър от IT услуги": "A full range of IT services",
    "От стратегия до внедряване — покриваме всяка стъпка от дигиталната трансформация на бизнеса ти.": "From strategy to implementation — we cover every step of your business's digital transformation.",
    "Персонализирани уеб приложения и корпоративни сайтове — бързи, сигурни и мащабируеми. От лендинг до SaaS платформа.": "Custom web applications and corporate websites — fast, secure and scalable. From a landing page to a SaaS platform.",
    "Responsive дизайн за всички устройства": "Responsive design for all devices",
    "React / Next.js / Vue.js фронтенд": "React / Next.js / Vue.js front end",
    "REST & GraphQL API интеграции": "REST & GraphQL API integrations",
    "CMS системи (WordPress, Headless)": "CMS systems (WordPress, headless)",
    "SEO оптимизация и Core Web Vitals": "SEO optimization and Core Web Vitals",
    "Поддръжка и хостинг решения": "Maintenance and hosting solutions",
    "Искам оферта →": "Request a quote →",
    "Native и cross-platform приложения за iOS и Android с изключително потребителско изживяване и висока конверсия.": "Native and cross-platform apps for iOS and Android with an outstanding user experience and high conversion.",
    "React Native & Flutter разработка": "React Native & Flutter development",
    "Native iOS (Swift) и Android (Kotlin)": "Native iOS (Swift) and Android (Kotlin)",
    "Push известия и офлайн режим": "Push notifications and offline mode",
    "Интеграция с платежни системи": "Payment system integration",
    "App Store & Google Play публикуване": "App Store & Google Play publishing",
    "Analytics и crash reporting": "Analytics and crash reporting",
    "Проектираме и управляваме облачна инфраструктура с автоматично мащабиране и оптимизирани разходи.": "We design and manage cloud infrastructure with automatic scaling and optimized costs.",
    "AWS / Azure / GCP архитектура": "AWS / Azure / GCP architecture",
    "Kubernetes & Docker контейнеризация": "Kubernetes & Docker containerization",
    "CI/CD pipeline автоматизация": "CI/CD pipeline automation",
    "Disaster recovery и backup стратегии": "Disaster recovery and backup strategies",
    "Cloud cost оптимизация": "Cloud cost optimization",
    "24/7 мониторинг и алертинг": "24/7 monitoring and alerting",
    "Интегрираме изкуствен интелект и автоматизираме бизнес процеси. Умни системи, които работят вместо теб денонощно.": "We integrate artificial intelligence and automate business processes. Smart systems that work for you around the clock.",
    "AI чатботове и виртуални асистенти": "AI chatbots and virtual assistants",
    "OpenAI / Claude API интеграции": "OpenAI / Claude API integrations",
    "Автоматизация на документооборота": "Document workflow automation",
    "Предиктивна анализа и прогнозиране": "Predictive analytics and forecasting",
    "Computer vision и OCR решения": "Computer vision and OCR solutions",
    "Персонализирани ML модели": "Custom ML models",
    "Многослойна защита на данните и системите ти. Намираме уязвимостите преди хакерите и изграждаме трайна сигурност.": "Multi-layer protection for your data and systems. We find vulnerabilities before hackers do and build lasting security.",
    "Penetration testing & одити": "Penetration testing & audits",
    "Защита от DDoS и ransomware": "DDoS and ransomware protection",
    "Мрежова сигурност и firewall": "Network security and firewalls",
    "Security Awareness обучения": "Security awareness training",
    "Правилните технологични решения без загубени пари. Анализираме IT статуса ти и изграждаме ясна пътна карта.": "The right technology decisions without wasted money. We analyze your IT status and build a clear roadmap.",
    "IT одит и оценка на инфраструктура": "IT audit and infrastructure assessment",
    "Дигитална трансформация стратегия": "Digital transformation strategy",
    "Избор на технологии и вендори": "Technology and vendor selection",
    "Project management и коучинг": "Project management and coaching",
    "ERP / CRM внедряване и интеграция": "ERP / CRM implementation and integration",
    "Технически due diligence": "Technical due diligence",
    "Намираме грешките преди клиентите ти. Комплексно тестване на уеб и мобилни приложения — ръчно и автоматизирано, за безупречно потребителско изживяване.": "We find the bugs before your customers do. Comprehensive testing of web and mobile apps — manual and automated — for a flawless user experience.",
    "Функционално и регресионно тестване": "Functional and regression testing",
    "Автоматизирано тестване (Selenium, Cypress)": "Automated testing (Selenium, Cypress)",
    "Cross-browser и cross-device тестване": "Cross-browser and cross-device testing",
    "API тестване (Postman, REST Assured)": "API testing (Postman, REST Assured)",
    "Детайлни bug репорти и QA документация": "Detailed bug reports and QA documentation",
    "Бърза отдалечена техническа помощ без нужда от посещение на място. Свързваме се с твоя компютър или сървър за минути и решаваме проблема в реално време.": "Fast remote technical help with no on-site visit needed. We connect to your computer or server within minutes and solve the problem in real time.",
    "Отдалечен достъп и диагностика (TeamViewer, AnyDesk)": "Remote access and diagnostics (TeamViewer, AnyDesk)",
    "Инсталация и конфигурация на софтуер": "Software installation and configuration",
    "Отстраняване на вируси и зловреден код": "Virus and malware removal",
    "Поддръжка на Windows, macOS и Linux": "Windows, macOS and Linux support",
    "Помощ за малки и средни бизнеси": "Help for small and medium businesses",
    "Реакция до 30 минути при критични проблеми": "Response within 30 minutes for critical issues",
    "Искам помощ →": "I need help →",
    "Създаване на концепция": "Concept development",
    "Превръщаме твоята идея в ясна, работеща концепция за продукт или бизнес. От първоначална визия до детайлен план, готов за реализация и привличане на инвеститори.": "We turn your idea into a clear, workable concept for a product or business. From the first vision to a detailed plan, ready for execution and for attracting investors.",
    "Анализ на пазара и конкурентната среда": "Market and competitor analysis",
    "Дефиниране на целева аудитория и USP": "Target audience and USP definition",
    "Бизнес модел и приходни стратегии": "Business model and revenue strategies",
    "Продуктова roadmap и MVP дефиниция": "Product roadmap and MVP definition",
    "Pitch deck и презентация за инвеститори": "Pitch deck and investor presentation",
    "Брандинг концепция и визуална идентичност": "Branding concept and visual identity",
    "Обсъди идеята си →": "Discuss your idea →",
    "Как работим": "How we work",
    "Прост процес, изключителни резултати": "A simple process, outstanding results",
    "Анализ": "Analysis",
    "Разбираме нуждите и целите на бизнеса ти в дълбочина.": "We understand your business needs and goals in depth.",
    "Стратегия": "Strategy",
    "Изграждаме персонализиран план с ясни KPI и срокове.": "We build a tailored plan with clear KPIs and deadlines.",
    "Разработка": "Development",
    "Изпълняваме с agile методология и прозрачна комуникация.": "We deliver with agile methodology and transparent communication.",
    "Поддръжка": "Support",
    "Дългосрочно партньорство и непрекъснато усъвършенстване.": "Long-term partnership and continuous improvement.",
    "Въпроси": "Questions",
    "Често задавани въпроси": "Frequently asked questions",
    "Какви услуги предлагате?": "What services do you offer?",
    "Предлагаме персонализирани IT решения, включително изработка на уебсайтове и уеб приложения, мобилни приложения (iOS и Android), cloud решения, AI автоматизации, киберсигурност, IT консултации, QA тестване и отдалечена поддръжка (Remote Assistance).": "We offer custom IT solutions, including websites and web applications, mobile apps (iOS and Android), cloud solutions, AI automation, cybersecurity, IT consulting, QA testing and remote support (Remote Assistance).",
    "Колко струва сайт и как се определя цената?": "How much does a website cost and how is the price determined?",
    "Цената винаги е ориентировъчна и зависи от специфичните изисквания, необходимите функционалности и обхвата на Вашия проект. Финалните параметри и оферта се уточняват по имейл или телефон след проведен разговор.": "The price is always indicative and depends on the specific requirements, the functionality needed and the scope of your project. The final parameters and quote are agreed by email or phone after a conversation.",
    "Колко време отнема изработката?": "How long does it take?",
    "Времето за изработка зависи от сложността и обхвата на проекта. Точните срокове се определят и уточняват предварително в индивидуалната оферта.": "The timeline depends on the complexity and scope of the project. Exact deadlines are set and agreed in advance in the individual quote.",
    "Как работи чатът за оферти?": "How does the quote chat work?",
    "Нашият AI асистент събира първоначална информация за Вашия проект и нужди. Всяка изготвена оферта се преглежда задължително от човек преди изпращане. Моля, не споделяйте пароли или лични документи в чата.": "Our AI assistant collects initial information about your project and needs. Every quote is reviewed by a person before it is sent. Please do not share passwords or personal documents in the chat.",
    "Какво включва поддръжката?": "What does maintenance include?",
    "Поддръжката може да включва мониторинг на работоспособността, обновяване на сигурността, отстраняване на технически проблеми, регулярно архивиране и отдалечена поддръжка според договорения план.": "Maintenance may include uptime monitoring, security updates, fixing technical issues, regular backups and remote support according to the agreed plan.",
    "Как да се свържа с вас?": "How can I contact you?",
    "Можете да се свържете с нас на имейл": "You can reach us by email at",
    "или по телефон на": "or by phone at",
    ", както и чрез формата за контакт или чат асистента на сайта.": ", as well as through the contact form or the chat assistant on this site.",
    "Стек": "Stack",
    "Технологии, на които можеш да разчиташ": "Technologies you can rely on",
    "Защита": "Protection",
    "по подразбиране": "by default",
    "Този сайт е статичен — без сървърен код и база данни. Ето какво реално го пази.": "This site is static — no server code and no database. Here is what actually protects it.",
    "Ограничава откъде могат да се зареждат скриптове и ресурси — намалява риска от XSS.": "Restricts where scripts and resources can be loaded from — reduces the risk of XSS.",
    "АКТИВНО": "ACTIVE",
    "Сайтът се сервира през HTTPS (GitHub Pages) — трафикът до него е криптиран.": "The site is served over HTTPS (GitHub Pages) — traffic to it is encrypted.",
    "Невидими полета хващат ботове автоматично без да засягат реалните потребители.": "Hidden fields catch bots automatically without affecting real users.",
    "Валидация на входа": "Input validation",
    "Полетата на формата се проверяват по формат и дължина преди изпращане.": "Form fields are checked for format and length before submission.",
    "Статичен сайт": "Static site",
    "Няма сървърен код и база данни — няма SQL injection и няма сървър за превземане.": "There is no server code or database — no SQL injection and no server to take over.",
    "Минимални зависимости": "Minimal dependencies",
    "Шрифтовете се хостват локално — без външни скриптове и без връзка към Google.": "Fonts are hosted locally — no external scripts and no connection to Google.",
    "Качество": "Quality",
    "QA Тестване —": "QA Testing —",
    "нулева толерантност към грешки": "zero tolerance for errors",
    "Намираме бъговете преди клиентите ти. Комплексен QA процес, вграден в разработката от ден 1.": "We find the bugs before your customers do. A comprehensive QA process built into development from day 1.",
    "Ръчно тестване": "Manual testing",
    "Детайлна проверка на всеки user flow и edge case. Симулираме реално потребителско поведение на различни устройства и браузъри.": "Detailed checks of every user flow and edge case. We simulate real user behavior on different devices and browsers.",
    "Автоматизирано тестване": "Automated testing",
    "Cypress, Selenium и Playwright тест suite-ове, които се изпълняват при всеки commit. Регресионно тестване за нулеви регресии.": "Cypress, Selenium and Playwright test suites that run on every commit. Regression testing for zero regressions.",
    "Performance тестване": "Performance testing",
    "Load тестване с JMeter и k6. Засичаме bottleneck-и преди пускане в production. Целим Core Web Vitals резултати над 90.": "Load testing with JMeter and k6. We spot bottlenecks before going to production. We aim for Core Web Vitals scores above 90.",
    "API тестване": "API testing",
    "Пълно покритие на REST и GraphQL endpoints с Postman колекции. Валидация на response схеми, статус кодове и edge cases.": "Full coverage of REST and GraphQL endpoints with Postman collections. Validation of response schemas, status codes and edge cases.",
    "Cross-platform тестване": "Cross-platform testing",
    "Тестване на реални устройства и BrowserStack. iOS, Android, Chrome, Firefox, Safari, Edge — гарантираме еднакво изживяване навсякъде.": "Testing on real devices and BrowserStack. iOS, Android, Chrome, Firefox, Safari, Edge — we guarantee a consistent experience everywhere.",
    "QA Документация": "QA documentation",
    "Детайлни test plan-ове, bug репорти с репродукционни стъпки, screenshots и видеа. Интеграция с Jira, Linear или GitHub Issues.": "Detailed test plans, bug reports with reproduction steps, screenshots and videos. Integration with Jira, Linear or GitHub Issues.",
    "Безплатни QA шаблони": "Free QA templates",
    "Материали DigComp": "DigComp materials",
    "Реакция до 30 минути": "Response within 30 minutes",
    "Обади се сега": "Call now",
    "Пиши ни": "Email us",
    "🎁 Безплатни QA шаблони": "🎁 Free QA templates",
    "✨ Фон: вкл.": "✨ Background: on",
    "✨ Фон: изкл.": "✨ Background: off",
    "📚 Материали DigComp": "📚 DigComp materials",
    "Безплатен QA пакет": "Free QA pack",
    "Шаблони на български: тест план, бъг репорт, тест случаи (Excel), чеклисти за уеб, мобилно и API, и QA речник. Свободен за сваляне и ползване.": "Templates in Bulgarian: test plan, bug report, test cases (Excel), checklists for web, mobile and API, and a QA glossary. Free to download and use.",
    "Свали безплатно (ZIP) ↓": "Download for free (ZIP) ↓",
    "Материали за DigComp (нива 1-8) →": "DigComp materials (levels 1-8) →",
    "Отдалечена помощ": "Remote help",
    "решение за минути": "a solution in minutes",
    "Без чакане, без посещение на място. Свързваме се с твоя компютър или сървър и решаваме проблема в реално време — от всяка точка на света.": "No waiting, no on-site visit. We connect to your computer or server and solve the problem in real time — from anywhere in the world.",
    "Как работи?": "How does it work?",
    "Свържи се с нас": "Contact us",
    "Пиши ни на имейл или се обади — описваш проблема, ние определяме приоритета.": "Email us or call — you describe the problem, we set the priority.",
    "Изтегли инструмента": "Download the tool",
    "Изпращаме ти линк за TeamViewer или AnyDesk — инсталацията отнема под 2 минути.": "We send you a TeamViewer or AnyDesk link — installation takes under 2 minutes.",
    "Свързваме се и решаваме": "We connect and fix it",
    "Нашият техник поема контрол (с твое разрешение) и отстранява проблема пред очите ти.": "Our technician takes control (with your permission) and fixes the problem right before your eyes.",
    "Готово и сигурно": "Done and secure",
    "Сесията приключва — нямаме постоянен достъп. Получаваш резюме на извършеното.": "The session ends — we have no permanent access. You get a summary of what was done.",
    "Какво решаваме?": "What do we solve?",
    "Вируси и зловреден код": "Viruses and malware",
    "Пълно сканиране, премахване и превенция": "Full scan, removal and prevention",
    "Бавен компютър": "Slow computer",
    "Оптимизация, почистване, ускоряване": "Optimization, cleanup, speed-up",
    "Мрежови проблеми": "Network problems",
    "VPN, интернет, Wi-Fi конфигурация": "VPN, internet, Wi-Fi configuration",
    "Инсталация на софтуер": "Software installation",
    "Настройка на Windows, Office, драйвери": "Setting up Windows, Office, drivers",
    "Забравени пароли": "Forgotten passwords",
    "Възстановяване на достъп до акаунти": "Recovering access to accounts",
    "Backup и възстановяване": "Backup and recovery",
    "Спасяване на данни и cloud backup": "Data rescue and cloud backup",
    "⚡ Реакция до 30 минути": "⚡ Response within 30 minutes",
    "Работим в работно и извънработно време. За спешни случаи — незабавна помощ.": "We work during and outside business hours. For urgent cases — immediate help.",
    "📱 Обади се сега": "📱 Call now",
    "📧 Пиши ни": "📧 Email us",
    "Нека обсъдим вашият проект": "Let's discuss your project",
    "Попълни формата и ще се свържем с теб до 24 часа за безплатна консултация.": "Fill in the form and we will get back to you within 24 hours for a free consultation.",
    "Гр. Лом, България": "Lom, Bulgaria",
    "Име": "Name",
    "⚠ Въведи валидно име (2–80 символа).": "⚠ Enter a valid name (2–80 characters).",
    "Имейл": "Email",
    "⚠ Въведи валиден имейл адрес.": "⚠ Enter a valid email address.",
    "Услуга": "Service",
    "Съобщение": "Message",
    "⚠ Съобщението трябва да е минимум 10 символа.": "⚠ The message must be at least 10 characters.",
    "Изпрати заявка →": "Send request →",
    "Поверителност": "Privacy",
    "© 2026 DimitTech · Гр. Лом": "© 2026 DimitTech · Lom",
    // ===== inline JS (index.html) =====
    "Заявката е изпратена!": "Request sent!",
    "Моля изчакай малко.": "Please wait a moment.",
    "Достигнат лимит. Опитай след 10 минути.": "Limit reached. Try again in 10 minutes.",
    "Моля, попълнете всички задължителни полета коректно.": "Please fill in all required fields correctly.",
    "Изпращане…": "Sending…",
    "✅ Заявката е изпратена! Ще се свържем до 24 часа.": "✅ Request sent! We will get back to you within 24 hours.",
    "Грешка при изпращането. Моля пиши ни директно на dimitar_beograd@abv.bg.": "Sending failed. Please email us directly at dimitar_beograd@abv.bg.",
    "Запитване от сайта": "Website enquiry",
    "Име:": "Name:",
    "Имейл:": "Email:",
    "Отваряме имейл приложението ти. Натисни „Изпрати\" там, за да завършим заявката.": "We are opening your email app. Press \"Send\" there to complete the request.",
    // ===== privacy.html =====
    "Поверителност — DimitTech": "Privacy — DimitTech",
    "← Към началото": "← Back to home",
    "Политика за поверителност": "Privacy policy",
    "Последна промяна: 3 октомври 2026 г.": "Last updated: 3 October 2026",
    "Кой отговаря за сайта": "Who is responsible for the site",
    "Сайтът DimitTech се поддържа от своя собственик в гр. Лом, България. Контакт по въпроси за лични данни:": "The DimitTech site is maintained by its owner in Lom, Bulgaria. Contact for personal data questions:",
    "Какви данни се обработват": "What data is processed",
    "Контактната форма съдържа полета за име, имейл, услуга и съобщение. Самата форма не изпраща данни автоматично. При натискане на „Изпрати заявка“ се отваря имейл приложението на посетителя с подготвено съобщение. Данните достигат до мен само ако посетителят изпрати това съобщение.": "The contact form has fields for name, email, service and message. The form itself does not send data automatically. When you press \"Send request\", the visitor's email app opens with a prepared message. The data reaches me only if the visitor sends that message.",
    "Ако ми пишеш директно по имейл или телефон, използвам данните, които сам си предоставил, само за да отговоря на запитването ти.": "If you write to me directly by email or phone, I use the data you provide yourself only to answer your enquiry.",
    "Чат за запитвания за оферта (AI асистент)": "Quote enquiry chat (AI assistant)",
    "На сайта има чат, в който можеш да опишеш проекта си и да поискаш оферта. В чата разговаряш с": "The site has a chat where you can describe your project and ask for a quote. In the chat you are talking to an",
    "AI асистент": "AI assistant",
    ", а не с човек. Офертата не се изпраща автоматично: аз я преглеждам, при нужда я поправям и чак тогава ти я пращам лично по имейл.": ", not a human. The quote is not sent automatically: I review it, correct it if needed and only then send it to you personally by email.",
    "Какви данни обработвам:": "What data I process:",
    "това, което напишеш в чата (име, имейл, описание на проекта, бюджет, срок). Моля, не пиши пароли, банкови данни или лични документи.": "what you write in the chat (name, email, project description, budget, deadline). Please do not write passwords, bank details or personal documents.",
    "Как стига до мен:": "How it reaches me:",
    "когато асистентът събере нужното, изготвя чернова на запитването. Тя се записва в услугата Cloudflare Workers KV (регион Европейски съюз) и ми се изпраща като известие в Telegram. Целият разговор не се запазва при мен. Той остава само в паметта на браузъра ти, докато затвориш страницата.": "when the assistant has collected what it needs, it prepares a draft of the enquiry. It is stored in the Cloudflare Workers KV service (European Union region) and sent to me as a Telegram notification. The whole conversation is not kept by me. It stays only in your browser's memory until you close the page.",
    "Срок на съхранение:": "Retention period:",
    "запазеното запитване се изтрива автоматично след 30 дни. Освен това се пази кратко (около час) технически брояч на заявките по IP адрес срещу злоупотреба.": "the stored enquiry is deleted automatically after 30 days. In addition, a technical request counter per IP address is kept briefly (about an hour) to prevent abuse.",
    "Кой друг участва като обработващ данни:": "Who else takes part as a data processor:",
    "Cloudflare (изпълнява програмата на чата и съхранява запитването), Anthropic (AI услугата, която съставя отговорите) и Telegram (известието до мен). Тези доставчици могат да обработват данни и извън Европейския съюз според собствените си политики и условия. Основанието е твоето запитване, с което искаш оферта.": "Cloudflare (runs the chat program and stores the enquiry), Anthropic (the AI service that composes the answers) and Telegram (the notification to me). These providers may process data outside the European Union according to their own policies and terms. The legal basis is your enquiry, in which you ask for a quote.",
    "Бисквитки и проследяване": "Cookies and tracking",
    "Сайтът не използва бисквитки, инструменти за анализ на трафика, реклами или други средства за проследяване. Единственото, което се пази в браузъра ти, е изборът на език (BG/EN) — локално на устройството ти.": "The site does not use cookies, traffic analytics tools, ads or other tracking means. The only thing stored in your browser is your language choice (BG/EN), kept locally on your device.",
    "Хостинг": "Hosting",
    "Сайтът се хоства от GitHub Pages, а чатът използва Cloudflare (виж по-горе). Както при всеки хостинг, GitHub може да обработва технически данни за заявките (например IP адрес) според собствената си политика за поверителност. Шрифтовете се хостват локално на сайта, затова браузърът ти не се свързва с Google за зареждането им.": "The site is hosted by GitHub Pages and the chat uses Cloudflare (see above). As with any hosting, GitHub may process technical request data (for example IP address) according to its own privacy policy. Fonts are hosted locally on the site, so your browser does not connect to Google to load them.",
    "Срок на съхранение": "Retention period",
    "Получените по имейл запитвания се пазят само докато са нужни за отговор на запитването и за изпълнение на евентуален договор или законово задължение.": "Enquiries received by email are kept only as long as needed to answer the enquiry and to fulfil any contract or legal obligation.",
    "Твоите права": "Your rights",
    "Можеш да поискаш достъп до личните си данни, поправянето или изтриването им, както и ограничаване на обработването им. Пиши ми на имейла по-горе. Имаш право и да подадеш жалба до Комисията за защита на личните данни (КЗЛД) —": "You can request access to your personal data, its correction or deletion, and restriction of its processing. Write to me at the email above. You also have the right to lodge a complaint with the Commission for Personal Data Protection (CPDP) —"
  };

  var STORE = 'dt_lang';
  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function detect() {
    try { var s = localStorage.getItem(STORE); if (s === 'bg' || s === 'en') return s; } catch (e) {}
    var list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var l = String(list[i] || '').toLowerCase();
      if (l.indexOf('bg') === 0) return 'bg';
      if (l.indexOf('en') === 0) return 'en';
    }
    return 'en';
  }

  var cur = 'bg';
  var textOrig = new WeakMap();
  var attrOrig = new WeakMap();
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];

  function t(bg) { if (cur !== 'en') return bg; var k = norm(bg); return Object.prototype.hasOwnProperty.call(EN, k) ? EN[k] : bg; }

  function walkText(root, lang) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        return (p === 'SCRIPT' || p === 'STYLE' || p === 'NOSCRIPT') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = w.nextNode())) nodes.push(n);
    nodes.forEach(function (node) {
      if (lang === 'en') {
        var raw = textOrig.has(node) ? textOrig.get(node) : node.nodeValue;
        var k = norm(raw);
        if (k && Object.prototype.hasOwnProperty.call(EN, k)) {
          textOrig.set(node, raw);
          var lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
          node.nodeValue = lead + EN[k] + trail;
        }
      } else if (textOrig.has(node)) {
        node.nodeValue = textOrig.get(node);
      }
    });
  }

  function walkAttrs(lang) {
    var sel = '[placeholder],[aria-label],[title],[alt],meta[name="description"]';
    Array.prototype.forEach.call(document.querySelectorAll(sel), function (el) {
      if (el.id === 'dt-lang' || el.closest && el.closest('#dt-lang')) return;
      var saved = attrOrig.get(el) || {};
      var list = ATTRS.slice(); if (el.nodeName === 'META') list.push('content');
      list.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        if (lang === 'en') {
          var raw = (a in saved) ? saved[a] : el.getAttribute(a);
          var k = norm(raw);
          if (Object.prototype.hasOwnProperty.call(EN, k)) { saved[a] = raw; el.setAttribute(a, EN[k]); }
        } else if (a in saved) { el.setAttribute(a, saved[a]); }
      });
      attrOrig.set(el, saved);
    });
  }

  var titleBg = document.title;
  function apply(lang) {
    cur = lang;
    document.documentElement.setAttribute('lang', lang);
    walkText(document.body, lang);
    walkAttrs(lang);
    var tk = norm(titleBg);
    document.title = (lang === 'en' && EN[tk]) ? EN[tk] : titleBg;
    var b = document.getElementById('dt-lang');
    if (b) {
      b.querySelector('[data-l="bg"]').setAttribute('aria-pressed', String(lang === 'bg'));
      b.querySelector('[data-l="en"]').setAttribute('aria-pressed', String(lang === 'en'));
    }
  }

  function set(lang, persist) {
    if (lang !== 'bg' && lang !== 'en') return;
    if (persist) { try { localStorage.setItem(STORE, lang); } catch (e) {} }
    apply(lang);
    try { document.dispatchEvent(new CustomEvent('dt-lang', { detail: lang })); } catch (e) {}
  }

  function buildSwitch() {
    var css = document.createElement('style');
    css.textContent = '#dt-lang{position:fixed;left:16px;bottom:16px;z-index:9997;display:flex;border:1px solid rgba(0,212,255,.35);border-radius:999px;overflow:hidden;background:#0C1526;font:600 12px/1 system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.4)}' +
      '#dt-lang button{border:0;background:transparent;color:#8FA0BA;padding:9px 12px;cursor:pointer;font:inherit;letter-spacing:.04em}' +
      '#dt-lang button[aria-pressed="true"]{background:#00D4FF;color:#050A14}' +
      '#dt-lang button:focus-visible{outline:2px solid #fff;outline-offset:-2px}';
    document.head.appendChild(css);
    var box = document.createElement('div');
    box.id = 'dt-lang'; box.setAttribute('role', 'group'); box.setAttribute('aria-label', 'Language / Език');
    ['bg', 'en'].forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button'; b.setAttribute('data-l', l); b.textContent = l.toUpperCase();
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () { set(l, true); });
      box.appendChild(b);
    });
    document.body.appendChild(box);
  }

  window.DT_I18N = { lang: function () { return cur; }, t: t, set: function (l) { set(l, true); } };
  cur = detect();
  function init() { buildSwitch(); apply(cur); try { document.dispatchEvent(new CustomEvent('dt-lang', { detail: cur })); } catch (e) {} }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
