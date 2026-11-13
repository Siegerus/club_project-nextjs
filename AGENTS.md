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

Слои `entities`/`features`/`widgets` делятся на слайсы, каждый слайс декомпозируется по сегментам. Внутри сегментов разрешены подпапки (`lib/hooks/`, `lib/utils/`, `ui/<компонент>/`).

**Что куда размещать:**

- `ui/` — всё, что связано с отображением: React-компоненты, стили, локальные подкомпоненты слайса. Здесь не размещаются: бизнес-логика, сетевые запросы, обращение к store напрямую из разметки (только через props/hooks из `model/`).
- `model/` — бизнес-логика слайса:
  - состояние, хранилище (slice/stores), селекторы, actions, thunk'и;
  - типы бизнес-логики слайса;
  - мапперы доменной модели, не связанные с конкретным сетевым запросом (если преобразование неразрывно связано с получением данных — DTO-маппер живёт в `api/` рядом с запросом).
  - Здесь НЕ размещаются: UI-подготовка данных к отображению (это `lib/`), React-компоненты.
- `api/` — запросы к серверу, клиенты API, DTO-типы и DTO-мапперы (server → domain). Не размещаются: view-преобразования, UI-типы.
- `lib/` — инфраструктурный код слайса:
  - утилиты-хелперы;
  - **view-мапперы** — чистые функции подготовки доменных данных к отображению (domain → props для UI), например `capabilities-to-card-data.ts`. Признаки: на входе доменные данные/публичный API `entities`, на выходе типы из `shared/ui` или props-типы слайса; нет зависимостей от React и состояния;
  - чистые константы и статический конфиг (nav-списки, заголовки, тексты, ссылки на соцсети).
  - Сегмент `config/` в проекте не используется — константы живут в `lib/`.
- `index.ts` — обязательный публичный API слайса.

**Критерий выбора `lib/` vs `model/` vs `api/` для функции:**

- преобразует ответ сервера/DTO в доменные данные → `api/` (или `model/`, если она не связана с конкретным запросом);
- преобразует доменные данные в props/структуры для отображения → `lib/`;
- меняет состояние, содержит бизнес-логику → `model/`.

Правила:

1. Каждый слайс обязан иметь публичный API `index.ts`. Обращение к слайсу из другого слоя — только через `index.ts`; глубокие импорты внутренностей слайса запрещены (правило `import/no-internal-modules`).
2. Слайсы одного слоя не импортируют друг друга. Зависимость между соседними слайсами поднимается на слой выше (композиция в родительском слайсе или в `app`).
3. Сегменты одного слайса могут импортировать друг друга, но направление фиксировано: `ui/` → `model/` / `api/` / `lib/`; `model/` и `api/` не импортируют из `ui/`.
4. `shared/` — предметно-нейтральный слой (переиспользуемые UI-атомы и утилиты). `shared/` не делится на слайсы, а делится только на сегменты (`api/`, `lib/`, `ui/`); папки внутри `shared/ui` — это модули-компоненты, а не слайсы. Запрещено хардкодить доменные данные (контакты, соцсети) внутри `shared/` — они живут в `entities/` и передаются компонентам через props. Предметно-нейтральные маршруты приложения (`AppRoute`) допустимы в `shared/lib`.
5. `entities/` содержит предметную модель и её данные (например, `company`). `widgets`/`features` читают их только через публичный API слайса (`index.ts`).

### Обозначения и команды

- Алиас путей `@/` указывает на `src/` (см. `paths` в `tsconfig.json`). Импорты — только через `@/` и публичные API слайсов.
- Команды: `npm run dev` / `build` / `start` / `lint` / `lint:fix` / `lint:types` (`tsc --noEmit`).
- Нейминг: React-компоненты — `PascalCase`, файлы и каталоги — `kebab-case`, типы пропсов — `XxxProps`.

## Безопасность (критично)

Исходный проект содержит hardcoded токены и SMTP-пароли в PHP-файлах. При миграции все секреты должны быть вынесены в `.env.local`.

## Правила процесса

1. Весь процесс разработки и общение ведутся исключительно на русском языке.
2. Агент работает в режиме консультанта до явного указания перейти к редактированию файлов — никаких изменений в коде без прямого запроса пользователя.

## Самоулучшающийся харнесс

Контур обратной связи: ретроспектива → журнал → предложение → подтверждение → изменение правил.

1. После завершения задачи, в ходе которой агент исправлял собственную ошибку или вынужден был переспрашивать пользователя, агент **обязан** предложить ретроспективу по скиллу `.codeassistant/skills/self-improve/SKILL.md` или `.kilo/skills/self-improve/SKILL.md`.
2. Уроки фиксируются в `.codeassistant/memory/lessons.md` и `.kilo/memory/lessons.md`, решения об изменении артефактов — в `.codeassistant/memory/decisions.md` и `.kilo/memory/decisions.md`.
3. Изменения `AGENTS.md` и скиллов применяются **только после явного подтверждения пользователя** (принцип «агент предлагает — человек утверждает»).
4. Одна ретроспектива порождает не более 2–3 предложений изменений; каждое правило обязано заменять существующее или явно обосновывать своё существование.
5. При раздувании и дублировании правил предлагается рефакторинг скиллом `.codeassistant/skills/agent-md-refactor/SKILL.md` или `.kilo/skills/agent-md-refactor/SKILL.md`.
6. Скиллы (`.codeassistant/skills/` ↔ `.kilo/skills/`), правила (`.codeassistant/rules/` ↔ `.kilo/rules/`) и `mcp.json` дублируются в обоих харнессах: при изменении любого из этих файлов агент обязан применить ту же правку к зеркальной копии в другой директории. Если зеркальная копия недоступна для записи — агент передаёт пользователю точный diff для ручного применения. Копии не должны расходиться.

## Субагенты

| Агент    | Описание                            |
| -------- | ----------------------------------- |
| `code`   | Основной агент для написания кода   |
| `review` | Ревью кода и проверка качества      |
| `docs`   | Документация и обновление AGENTS.md |
| `tests`  | Тестирование и QA                   |
