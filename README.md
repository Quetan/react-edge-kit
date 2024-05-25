![ReactEdge Kit logo](./public/logo.svg)

# ReactEdge Kit

A powerful template for creating single-page applications (SPA) using TypeScript, React, TanStack Router, Shadcn/ui, and TailwindCSS. This starter kit follows the [Feature-Sliced Design (FSD) architecture](https://feature-sliced.design) and PWA-ready.

> _ReactEdge Kit - шаблон для создания SPA на базе TypeScript, React, TanStack Router, Shadcn/ui и TailwindCSS. Реализован на основе [архитектуры FSD](https://feature-sliced.design)._

## Features / _Особенности_

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

## Author / _Автор_

### Quetan (Korkin Kirill) / _Quetan (Коркин Кирилл)_

### Contacts / _Контакты_

- **Telegram**: [@quetan](https://t.me/KorkinK)
- **GitHub**: [quetan](https://github.com/quetan)
- **Email**: [quetan@vk.com](mailto:quetan@vk.com)

## Getting Started / _Начало работы_

### Prerequisites / _Предварительные требования_

Ensure you have Node.js and Yarn (or npm, pnpm, bun) installed on your machine.

> _Убедитесь, что на вашем компьютере установлены Node.js и Yarn (или npm, pnpm, Bun)._

### Detailed Steps / _Подробные шаги_

1. **Clone the repository:**
   (_Клонируйте репозиторий_)

   ```sh
   git clone https://github.com/quetan/react-edge-kit.git
   cd react-edge-kit
   ```

2. **Install dependencies:**
   (_Установите зависимости_)

   ```sh
   yarn install
   ```

3. **Run the development server:**
   (_Запустите сервер для разработки_)

   ```sh
   yarn dev
   ```

   The application will be available at `http://localhost:5173` (_Приложение будет доступно по адресу `http://localhost:5173`_).

4. **Build for production:**
   (_Подготовьте к продакшену_)

   ```sh
   yarn build
   ```

   The built files will be in the `dist` directory.
   (_Полученные файлы будут лежать в дирректории `dist`._)

5. **Preview the production build:**

   ```sh
   yarn preview
   ```

   This will start a local server to preview the production build.
   (_Команда запутсти локальный сервер с предпросмотром продакшен версии._)

## About Feature-Sliced Design / _Про Feature-Sliced Design_

Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it's a compilation of rules and conventions on organizing code. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.

> Feature-Sliced Design (FSD) — это архитектурная методология для проектирования frontend-приложений. Проще говоря, это свод правил и соглашений по организации кода. Главная цель методологии — сделать проект понятным и структурированным, особенно в условиях регулярного изменения требований бизнеса.

Read documentation here: [Documentation](https://feature-sliced.design/docs/get-started)

### Feature-Sliced Design scheme

![Feature slice design scheme](https://feature-sliced.design/assets/ideal-img/visual_schema.b6c18f6.1030.jpg)

## Contribution / _Сотрудничество_

Feel free to open issues or submit pull requests to help improve this project. Your contributions are welcome!

> _Буду рад открытым issue или pull request-ам! Ваш вклад приветствуется!_

## License / _Лицензия_

**[MIT](./LICENSE)**
