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

  vite: {
    optimizeDeps: {
      include: ['date-fns', 'zod'],
    },
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

  compatibilityDate: '2025-03-15',
})
