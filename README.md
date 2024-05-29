![ReactEdge Kit logo](./public/logo.svg)

# ReactEdge Kit

A powerful template for creating single-page applications (SPA) using TypeScript, React, TanStack Router, Shadcn/ui, and TailwindCSS. This starter kit follows the [Feature-Sliced Design (FSD) architecture](https://feature-sliced.design) and PWA-ready.

> _ReactEdge Kit - шаблон для создания SPA на базе TypeScript, React, TanStack Router, Shadcn/ui и TailwindCSS. Реализован на основе [архитектуры FSD](https://feature-sliced.design)._

## Table of contents / _Оглавление_

- [🗿 Author / Автор](#-author--автор)
  - [✉️ Contacts / Контакты](#️-contacts--контакты)
- [✨ Features / Особенности](#-features--особенности)
- [🛠 Getting Started / Начало работы](#-getting-started--начало-работы)
  - [⚙️ Prerequisites / Предварительные требования](#-prerequisites--предварительные-требования)
  - [📄 Detailed Steps / Подробные шаги](#-detailed-steps--подробные-шаги)
  - [📂 File structure / Структура файлов](#-file-structure--структура-файлов)
- [📦 About Feature-Sliced Design / Про FSD](#-about-feature-sliced-design--про-feature-sliced-design)
  - [📚 Feature-Sliced Design scheme](#-feature-sliced-design-scheme)
- [⁉️ FAQ / Часто задаваемые вопросы](#-faq--часто-задаваемые-вопросы)
- [✍️ Contribution / Сотрудничество](#-contribution--сотрудничество)
- [⚖️ License / Лицензия](#-license--лицензия)

## 🗿 Author / _Автор_

### Quetan (Korkin Kirill) / _Quetan (Коркин Кирилл)_

### ✉️ Contacts / _Контакты_

- **Telegram**: [@quetan](https://t.me/KorkinK)
- **GitHub**: [quetan](https://github.com/quetan)
- **Email**: [quetan@vk.com](mailto:quetan@vk.com)

## ✨ Features / _Особенности_

- **Development Environment (_Среда разработки_)**:
  - [Vite](https://vitejs.dev/) - Fast and optimized build tool for modern web projects ([configuration](./vite.config.ts)).
- **App Routing (_Роутинг_)**: [TanStack Router](https://tanstack.com/router/latest) - Powerful and flexible routing solution.
- **UI Components (_Набор компонентов_)**:
  - [Shadcn/ui](https://ui.shadcn.com/) - Customizable component library ([configuration](./components.json)).
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework ([configuration](./tailwind.config.js)).
- **Code Formatting** (_Форматирование кода_):
  - **Prettier**: Ensures consistent code style ([configuration](./.prettierrc)).
    - prettier-plugin-tailwindcss
  - **ESLint**: Maintains code quality and consistency ([configuration](./.eslintrc.cjs)).
- **Architectural Methodology (_Архитектура приложения_)**: FSD ([Documentation](https://feature-sliced.design/docs)) - A methodology for scalable frontend architecture.
- **PWA-Ready**: Includes a webmanifest for Progressive Web App (PWA) support.

## 🛠 Getting Started / _Начало работы_

### ⚙️ Prerequisites / _Предварительные требования_

Ensure you have Node.js and Yarn (or npm, pnpm, bun) installed on your machine.

> _Убедитесь, что на вашем компьютере установлены Node.js и NPM (или yarn, pnpm, Bun)._

### 📄 Detailed Steps / _Подробные шаги_

1. **Execute the installation script:**
   (_Запустите установочный скрипт_)

   ```sh
   npx react-edge-kit

   cd <your-project-name>

   ```

2. **Run the development server:**
   (_Запустите сервер для разработки_)

   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (_Приложение будет доступно по адресу `http://localhost:5173`_).

3. **Build for production:**
   (_Подготовьте к продакшену_)

   ```sh
   npm run build
   ```

   The built files will be in the `dist` directory.
   (_Полученные файлы будут лежать в директории `dist`._)

4. **Preview the production build:**

   ```sh
   npm run preview
   ```

   This will start a local server to preview the production build.
   (_Команда запутсти локальный сервер с предпросмотром продакшен версии._)

### 📂 File structure / _Структура файлов_

- **📁 public/** _(public files directory)_
- **📁 src/** _(source code directory)_
  - [**📁 app/**](./src/app/README.md)
  - [**📁 entities/**](./src/entities/README.md)
  - [**📁 features/**](./src/features/README.md)
  - [**📁 pages/**](./src/pages/README.md)
  - [**📁 routes/**](./src/routes/)
  - [**📁 shared/**](./src/shared/README.md)
  - [**📁 widgets/**](./src/widgets/README.md)
  - **routeTree.gen.ts** _(this file is auto-generated by TanStack Router)_
- [**.eslintrc.cjs**](./.eslintrc.cjs) _(ESLint configuration file)_
- [**.prettierrc**](./.prettierrc) _(Prettier configuration file)_
- [**postcss.config.js**](./postcss.config.js) _(PostCSS configuration file)_
- [**tailwind.config.js**](./tailwind.config.js) _(Tailwind CSS configuration file)_
- [**tsconfig.json**](./tsconfig.json) _(TypeScript configuration file)_
- [**vite.config.ts**](./vite.config.ts) _(Vite configuration file)_

## 📦 About Feature-Sliced Design / _Про Feature-Sliced Design_

[![Feature-Sliced Design][shields-fsd-white]](https://feature-sliced.design/)

[shields-fsd-white]: https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&labelColor=262224&color=F2F2F2&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA/SURBVHgB7dKxCgAgCIThs/d/51JoNQIdDrxvqMXlR4FmFs92KDIX/wI7JSdDN+eHtkxIycnQvMNW8hN/crsDc5QgGX9NvT0AAAAASUVORK5CYII=

Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it's a compilation of rules and conventions on organizing code. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.

> Feature-Sliced Design (FSD) — это архитектурная методология для проектирования frontend-приложений. Проще говоря, это свод правил и соглашений по организации кода. Главная цель методологии — сделать проект понятным и структурированным, особенно в условиях регулярного изменения требований бизнеса.

### Feature-Sliced Design scheme

![Feature slice design scheme](https://feature-sliced.design/assets/ideal-img/visual_schema.b6c18f6.1030.jpg)

Read documentation here: [documentation link](https://feature-sliced.design/docs/get-started)

## ⁉️ FAQ / _Часто задаваемые вопросы_

1. **❔ How do I start a new project based on ReactEdge Kit?** / _Как начать новый проект на основе ReactEdge Kit?_

ℹ️ Follow the instructions in the ["Getting Started"](#-getting-started--начало-работы) section. Ensure you have Node.js and NPM (or yarn, pnpm, Bun) installed.

> Следуйте инструкциям в разделе ["Начало работы"](#-getting-started--начало-работы). Убедитесь, что у вас установлены Node.js и NPM (или yarn, pnpm, Bun).

2. **❔ When and why should I use FSD architecture?** / _Когда и зачем мне использовать архитектуру FSD?_

ℹ️ You should read the ["Is it right for me?"](https://feature-sliced.design/docs/get-started/overview#is-it-right-for-me) article from the FSD documentation to understand if this architecture is suitable for your project.

> Рекомендуется ознакомиться со статьей ["Is it right for me?"](https://feature-sliced.design/docs/get-started/overview#is-it-right-for-me) в документации FSD, чтобы понять, подходит ли эта архитектура для вашего проекта.

3. **❔ How do I add new routes to the application?** / _Как добавить новые маршруты в приложение?_

ℹ️ To add new routes, utilize `TanStack Router`. Detailed information can be found in the [TanStack Router documentation](https://tanstack.com/router/latest/docs/framework/react/guide/route-trees).

ReactEdge Kit uses a [file-based routing system](https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing) by default. You can switch to a [code-based routing system](https://tanstack.com/router/latest/docs/framework/react/guide/code-based-routing) if preferred.

4. **❔ How can I customize the Shadcn/ui theme?** / _Как я могу настроить тему Shadcn/ui?_

ℹ️ Using the React Edge Kit installation wizard, you can select the primary color and font for your project. Additionally, you can interactively customize your theme on the [official Shadcn/ui website](https://ui.shadcn.com/themes).

> Используя мастер установки React Edge Kit, вы можете выбрать цвет темы и основной шрифт вашего проекта. Также вы можете интерактивно настроить свою тему на официальном сайте [Shadcn/ui](https://ui.shadcn.com/themes).

5. **❔ How do I integrate third-party libraries and plugins?** / _Как интегрировать сторонние библиотеки и плагины?_

ℹ️ Install the necessary libraries via Yarn or npm and import them into your project. Pay attention to Vite configuration and possible changes in configuration files (e.g., [`vite.config.ts`](./vite.config.ts)).

> Установите необходимые библиотеки через Yarn или npm и импортируйте их в свой проект. Обратите внимание на конфигурацию Vite и возможные изменения в файлах конфигурации (например, `vite.config.ts`).

6. **❔ What coding standards are used in ReactEdge Kit?** / _Какие стандарты используются в ReactEdge Kit?_

ℹ️ The project uses `Prettier` and `ESLint` to ensure consistent code style and maintain quality. Configurations for these tools are located in the [.prettierrc](./.prettierrc) and [.eslintrc.cjs](./.eslintrc.cjs) files.

> В проекте используются Prettier и ESLint для обеспечения единообразного стиля кода и поддержания качества. Конфигурации для этих инструментов находятся в файлах .prettierrc и .eslintrc.cjs.

7. **❔ How do I enable PWA support?** / _Как включить поддержку PWA?_

ℹ️ ReactEdge Kit already includes a [webmanifest](./public/favicon/site.webmanifest) for `PWA` support. Ensure your project is correctly configured and tested to work in PWA mode.

> ReactEdge Kit уже включает webmanifest для поддержки PWA. Убедитесь, что ваш проект правильно настроен и протестирован для работы в режиме PWA.

If you have additional questions, feel free to contact through the provided [contacts](#-contacts--контакты) or open an issue on GitHub.

> Если у вас возникнут дополнительные вопросы, не стесняйтесь обращаться через указанные [контакты](#-contacts--контакты) или открывать issue на GitHub.

## ✍️ Contribution / _Сотрудничество_

Feel free to open issues or submit pull requests to help improve this project. Your contributions are welcome!

> _Буду рад открытым issue или pull request-ам! Ваш вклад приветствуется!_

## ⚖️ License / _Лицензия_

**[MIT](./LICENSE)**
