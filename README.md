# Opinionated Nuxt Starter Template

## Nuxt Modules

- [Nuxt UI](https://ui.nuxt.com) - A UI Library for Modern Web Apps.
- [VueUse](https://vueuse.org) - Collection of Vue Composition Utilities.
- [Reka UI](https://reka-ui.com/) - Craft accessible web apps with Vue.
- [Content](https://content.nuxt.com) - Content made easy for Vue Developers.
- [Image](https://image.nuxt.com) - Plug-and-play image optimization for Nuxt apps.
- [ESLint](https://eslint.nuxt.com) - Nuxt ESLint module / config integration.

> These are the pre-packed modules in this starter template. Feel free to ditch any module you won't be using.

## Nuxt UI Modules

These modules are pre-packed with the Nuxt UI module.

- [TailwindCSS](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML.
- [Color mode](https://ui.nuxt.com/getting-started/color-mode/nuxt) - Dark and Light mode with auto-detection made easy with Nuxt 🌗.
- [Icon](https://ui.nuxt.com/getting-started/icons/nuxt) - Icon module for Nuxt with 100,000+ ready to use icons from Iconify.
- [Fonts](https://ui.nuxt.com/getting-started/fonts) - Plug-and-play web font optimization and configuration for Nuxt apps.

> [Zod](https://zod.dev/) is mainly included for schema validation in `UForm` ([see here](https://ui.nuxt.com/docs/components/form#schema-validation)).

## Out-of-the-Box Features

- **API Client:** Pre-configured `$api` client and plugin for standardized fetch requests.
- **Environment Validation:** Fail-fast validation of environment variables on startup.
- **Custom Logger:** Centralized `useLogger` utility for structured logs.
- **Hydration Flag:** Client hydration flag plugin helper.
- **Auth Scaffolding:** Built-in auth layouts, login pages, and session middleware.

## Other Features

- [pnpm](https://pnpm.io/) - Save time. Save disk space. Supercharge your monorepos.
- [Prettier](https://prettier.io/) - Opinionated code formatter.
  - [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation) - Automatic Class Sorting with Prettier. [Read more](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier).
- [Unlighthouse](https://unlighthouse.dev/) - Lighthouse for your entire site.
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Checklist

When you use this template, try to follow the checklist to update your info properly

- [ ] Copy `.env.example` to `.env` and configure environment variables
- [ ] Change the name and description in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Remove `<NuxtWelcome />` in `src/pages/index.vue`
- [ ] Clean up the READMEs and remove routes
- [ ] Clean up the images in `public/`
- [ ] Remove any modules you won't be needing.
