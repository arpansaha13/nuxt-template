// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://ui.nuxt.com/
    '@nuxt/ui',

    // https://reka-ui.com/
    'reka-ui/nuxt',

    // https://vueuse.org/
    '@vueuse/nuxt',

    // https://content.nuxtjs.org/
    '@nuxt/content',

    // https://image.nuxt.com
    '@nuxt/image',

    // https://eslint.nuxt.com/
    '@nuxt/eslint',

    // https://nuxt.com/docs/getting-started/testing
    '@nuxt/test-utils/module',

    // https://html-validator.nuxtjs.org/
    '@nuxtjs/html-validator',
  ],

  srcDir: 'src/',

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    },
  },

  // Auto-import app state, mutation helpers, and API composables (create files under these dirs as needed).
  imports: {
    dirs: ['~/store', '~/utils/mutations', '~/composables/api'],
  },

  runtimeConfig: {
    // Override with NUXT_AUTH_COOKIE_NAME / NUXT_API_BASE_URL
    authCookieName: 'session',
    apiBaseUrl: 'http://localhost:4000',
    public: {
      // Override with NUXT_PUBLIC_ENVIRONMENT
      environment: 'development',
    },
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    classPrefix: '',
    classSuffix: '',
  },

  htmlValidator: {
    usePrettier: false,
    logLevel: 'verbose',
    failOnError: false,
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard',
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off',
      },
    },
  },

  compatibilityDate: '2025-03-15',
})
