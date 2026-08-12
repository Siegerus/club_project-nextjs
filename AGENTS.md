<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Проект club_project-nextjs

## Обзор

Проект представляет собой переписывание статического сайта клуба "Притяжение" (свингер-клуб) с Gulp + SCSS + PHP на **Next.js 16 + Tailwind CSS v4 + TypeScript**.

## Исходный проект (club_project)

Расположен в `./club_project/`. Стек: Gulp 4, Webpack, SASS, Babel, БЭМ-методология, PHP (PHPMailer + Telegram Bot API).

### Структура исходного проекта:
```
club_project/
├── src/
│   ├── blocks/modules/    # 20 БЭМ-блоков (header, promo, autorization, join, ...)
│   ├── views/             # 12 HTML-страниц (index, autorization, events, VIP, ...)
│   ├── styles/            # SCSS (main.scss → variables, mixins, fonts, base, modules)
│   ├── js/                # Клиентский JS (index.js, import/modules.js, import/components.js)
│   ├── img/               # Изображения, иконки, спрайты, favicons
│   ├── fonts/             # Gilroy (Medium, SemiBold, ExtraBold)
│   └── php/               # Backend: smart.php (SMTP), telegram/*.php (Bot API)
├── gulp-tasks/            # 10 задач Gulp (views, styles, scripts, images, webp, serve, ...)
├── gulpfile.babel.js
├── webpack.config.js
└── package.json
```

### Ключевые блоки (модули):
header, logo, button, promo, title, benefit, feed-form, join, sign, partners, events, bangles, rules, vip, loyalty, questions, connect, action, reviews, modal, footer, animation, policy, 404

### Страницы:
index.html, autorization.html, bangles.html, curent-event.html, events.html, loyalty.html, policy.html, questions.html, rules.html, VIP.html, contacts.html, page.html

## Целевой стек

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` в globals.css)
- **Language:** TypeScript
- **Fonts:** `next/font/local` — Gilroy (Medium 500, SemiBold 600, ExtraBold 800)
- **Fonts location:** `public/fonts/`

## Архитектура миграции

### Директории:
- `/src/app/` — App Router (`layout.tsx`, `page.tsx`, `globals.css`, `fonts.tsx`, route segments)
- `/src/app/*/page.tsx` — страницы (contacts, bangles, vip, rules, events, ...)
- `/src/components/ui/` — переиспользуемые UI-компоненты (Button, Hamburger, SocialItem, ...)
- `/src/components/` — компоновочные компоненты и секции (Header, Footer, Logo, OuterInfo, ...)
- `/src/components/header/nav-menu/` — колокация: подкомпоненты навигации, используемые только в Header
- `/src/components/footer/` — колокация: подкомпоненты футера
- `/src/lib/` — утилиты, константы, типы
- `/public/img/` — изображения (копия из club_project/src/img/)
- `/public/fonts/` — шрифты (уже скопированы)

### Миграция стилей (SCSS → Tailwind):
1. Переменные SCSS → `@theme inline` в `globals.css`
2. Миксины SCSS → Tailwind утилиты или `@apply`
3. БЭМ-классы → Tailwind классы в React-компонентах
4. Сложные селекторы (градиенты, тени) → inline styles или `@apply` в компонентах
5. Responsive → Tailwind breakpoint-префиксы (`sm:`, `md:`, `lg:`)

### Миграция JS:
1. DOM-манипуляции → React state/useEffect
2. Табы, модалки, аккордеоны → компоненты с useState
3. Формы → React state + API Routes вместо PHP

### Миграция PHP → API Routes:
1. `smart.php` (PHPMailer) → `/src/app/api/email/route.ts`
2. `telegram/*.php` → `/src/app/api/telegram/route.ts`
3. Токены и credentials → environment variables (`.env.local`)

## Безопасность (критично)

Исходный проект содержит hardcoded токены и SMTP-пароли в PHP-файлах. При миграции все секреты должны быть вынесены в `.env.local`.

## Правила процесса

1. Весь процесс разработки и общение ведутся исключительно на русском языке.
2. Агент работает в режиме консультанта до явного указания перейти к редактированию файлов — никаких изменений в коде без прямого запроса пользователя.

## Субагенты

| Агент | Описание |
|-------|----------|
| `code` | Основной агент для написания кода |
| `review` | Ревью кода и проверка качества |
| `docs` | Документация и обновление AGENTS.md |
| `tests` | Тестирование и QA |
