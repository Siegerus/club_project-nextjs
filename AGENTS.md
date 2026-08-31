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

authorization, bangles, contacts, events, faq, loyalty, rules, vip, корневой page

## Целевой стек

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` в globals.css)
- **Language:** TypeScript
- **Fonts:** `next/font/local` — Gilroy (Medium 500, SemiBold 600, ExtraBold 800)
- **Fonts location:** `public/fonts/`

## Архитектура проекта (FSD)

### Директории:

- `/src/app/` — App Router (`layout.tsx`, `page.tsx`, `globals.css`, `fonts.tsx`, route segments)
- `/src/app/*/page.tsx` — страницы (`authorization`, `bangles`, `contacts`, `events`, `faq`, `loyalty`, `rules`, `vip`, корневой `page.tsx`)
- `/src/widgets/` — крупные составные блоки (`header`, `footer`) с собственными UI и константами
- `/src/shared/ui/` — переиспользуемые UI-компоненты (`button`, `hamburger`, `logo`, `outer-info`, `social-item`, `social-list`, `heading`, `container`, `nav-item`, ...)
- `/src/shared/lib/` — утилиты, константы, типы
- `/src/features/` — фичи
- `/src/entities/` — сущности (`company`)
- `/public/img/` — изображения (копия из `club_project/src/img/`)
- `/public/fonts/` — шрифты Gilroy (Medium 500, SemiBold 600, ExtraBold 800)

### Шрифты:

- Подключены через `next/font/local` в `src/app/fonts.tsx`
- Используется CSS-переменная `gilroy.variable` в `layout.tsx`

### Решение по слою `pages` (компромисс App Router)

**Проблема.** В классическом FSD есть отдельный слой `pages` для композиции страниц, а `app` отвечает только за роутинг и корневой layout. Next.js App Router жёстко требует, чтобы страницы лежали в `src/app/<route>/page.tsx`, поэтому полноценный отдельный слой `pages` в этом проекте не создаётся.

**Зафиксированное решение.**

1. Слой `pages` объединён со слоем `app`: композиция страницы выполняется непосредственно в `src/app/<route>/page.tsx`.
2. `page.tsx` содержит **только** композицию из `widgets`/`features`/`entities` + подстановку данных. Писать крупные секции, вёрстку и бизнес-логику прямо в `page.tsx` запрещено.
3. Порог роста: если страница перестаёт помещаться в ~1 экран чтения (≈50–80 строк) либо секция переиспользуется на нескольких страницах — выносить её в слайс `widgets`, а интерактивные сценарии — в `features`.
4. Импорты выполняются только через публичные API слайсов (`index.ts`); глубокие импорты внутренних модулей запрещены (правило `import/no-internal-modules`).

**Принудительная проверка.** Границы слоёв, направление зависимостей (строго сверху вниз) и публичные API проверяются автоматически ESLint: `eslint-plugin-boundaries` + `@feature-sliced/eslint-config` + `import/no-internal-modules`. Команда: `npm run lint`. Нарушение границы считается ошибкой (не предупреждением).

### Сегменты слайса и правила размещения кода

Каждый слайс слоёв `widgets`/`features`/`entities` декомпозируется по сегментам:

- `ui/` — React-компоненты и стили. Здесь не может быть бизнес-логики и сетевых запросов.
- `model/` — состояние, хранилище, селекторы, actions и типы бизнес-логики.
- `api/` — запросы к серверу, клиенты API, DTO.
- `lib/` — внутренние утилиты слайса.
- `config/` — конфигурация слайса (статические данные, константы, тексты).

Правила:

1. Чистые константы и статический конфиг (nav-списки, заголовки, тексты, ссылки на соцсети) размещаются в `lib/` или `config/`
2. UI-компонент не обращается к `api/` напрямую: интерактивные сценарии выносятся в `features`.
3. `shared/` — предметно-нейтральный слой (переиспользуемые UI-атомы и утилиты). Запрещено хардкодить доменные данные (контакты, соцсети, маршруты) внутри `shared/ui` — они живут в `entities/` и передаются компоненту через props.
4. `entities/` содержит предметную модель и её данные (например, `company`). `widgets`/`features` читают их только через публичный API слайса (`index.ts`).

### Обозначения и команды

- Алиас путей `@/` указывает на `src/` (см. `paths` в `tsconfig.json`). Импорты — только через `@/` и публичные API слайсов.
- Команды: `npm run dev` / `build` / `start` / `lint` / `lint:fix` / `lint:types` (`tsc --noEmit`).
- Нейминг: React-компоненты — `PascalCase`, файлы и каталоги — `kebab-case`, типы пропсов — `XxxProps`.

## Безопасность (критично)

Исходный проект содержит hardcoded токены и SMTP-пароли в PHP-файлах. При миграции все секреты должны быть вынесены в `.env.local`.

## Правила процесса

1. Весь процесс разработки и общение ведутся исключительно на русском языке.
2. Агент работает в режиме консультанта до явного указания перейти к редактированию файлов — никаких изменений в коде без прямого запроса пользователя.

## Субагенты

| Агент    | Описание                            |
| -------- | ----------------------------------- |
| `code`   | Основной агент для написания кода   |
| `review` | Ревью кода и проверка качества      |
| `docs`   | Документация и обновление AGENTS.md |
| `tests`  | Тестирование и QA                   |
