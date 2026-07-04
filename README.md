# Opinionated Nuxt 3 Starter Template

## Nuxt 3 Modules

- [NuxtUI](https://ui.nuxt.com) - A UI Library for Modern Web Apps.
- [VueUse](https://vueuse.org) - Collection of Vue Composition Utilities.
- [Reka UI](https://reka-ui.com/) - Craft accessible web apps with Vue.
- [Content](https://content.nuxtjs.org) - Content made easy for Vue Developers.
- [Image](https://v1.image.nuxtjs.org) - Plug-and-play image optimization for Nuxt apps.
- [Eslint](https://eslint.org) - The pluggable linting utility for JavaScript and JSX.

> These are the pre-packed modules in this starter template. Feel free to ditch any module you won't be using.

## Nuxt UI Modules

These modules are pre-packed with the Nuxt UI module.

- [TailwindCSS](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML.
- [Color mode](https://ui.nuxt.com/getting-started/color-mode/nuxt) - Dark and Light mode with auto-detection made easy with Nuxt 🌗.
- [Icon](https://ui.nuxt.com/getting-started/icons/nuxt) - Icon module for Nuxt with 100,000+ ready to use icons from Iconify.
- [Fonts](https://ui.nuxt.com/getting-started/fonts) - Plug-and-play web font optimization and configuration for Nuxt apps.
- [I18n](https://ui.nuxt.com/getting-started/i18n/nuxt) - I18n module for Nuxt.

> [Zod](https://zod.dev/) is included for schema validation in `UForm` ([see here](https://ui.nuxt.com/docs/components/form#schema-validation)).

## Other Features

- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager.
- [Prettier](https://prettier.io/) - Opinionated code formatter.
  - [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation) - Automatic Class Sorting with Prettier. [Read more](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier).
- [Unlighthouse](https://unlighthouse.dev/) - Like Google Lighthouse, but it scans every single page.
- [TypeScript](https://www.typescriptlang.org/) - Why not?

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

- [ ] Change the name and description in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Remove `<NuxtWelcome />` in `pages/index.vue`
- [ ] Clean up the READMEs and remove routes
- [ ] Clean up the images in `public/`
- [ ] Remove any modules you won't be needing.
