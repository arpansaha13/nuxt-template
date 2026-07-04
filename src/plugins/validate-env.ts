/**
 * Fail fast when required runtimeConfig values are missing.
 * Extend the lists below as your app grows.
 */
export default defineNuxtPlugin({
  name: 'validate-env',
  enforce: 'pre',
  setup() {
    const runtimeConfig = useRuntimeConfig()

    const requiredPrivate = [
      { key: 'authCookieName', displayName: 'NUXT_AUTH_COOKIE_NAME' },
      { key: 'apiBaseUrl', displayName: 'NUXT_API_BASE_URL' },
    ] as const

    const requiredPublic = [
      // { key: 'csrfCookieName', displayName: 'NUXT_PUBLIC_CSRF_COOKIE_NAME' },
    ] as const

    const missing: string[] = []

    if (import.meta.server) {
      for (const { key, displayName } of requiredPrivate) {
        const value = runtimeConfig[key as keyof typeof runtimeConfig]
        if (!value || (typeof value === 'string' && value.trim() === '')) {
          missing.push(displayName)
        }
      }
    }

    for (const { key, displayName } of requiredPublic) {
      const value = runtimeConfig.public[key as keyof typeof runtimeConfig.public]
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        missing.push(displayName)
      }
    }

    if (missing.length > 0) {
      throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
    }
  },
})
