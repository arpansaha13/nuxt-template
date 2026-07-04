import { LOGIN_PATH, UNAUTHORIZED_EXEMPT_URL_PREFIXES } from '~/utils/auth'

function pathnameOf(url: string) {
  try {
    return new URL(url, 'http://localhost').pathname
  } catch {
    return url
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const logger = useLogger('api')
  const runtimeConfig = useRuntimeConfig()

  const api = $fetch.create({
    onRequest({ options }) {
      if (import.meta.client) {
        options.credentials = 'include'
        return
      }

      options.baseURL = runtimeConfig.apiBaseUrl as string
      const authCookieName = runtimeConfig.authCookieName as string

      const headers = new Headers(options.headers as HeadersInit | undefined)
      const token = useCookie<string | null>(authCookieName)
      if (token.value) {
        headers.set('Cookie', `${authCookieName}=${token.value}`)
      }
      options.headers = headers
    },
    async onResponseError({ response }) {
      logger.debug(`API request failed: [${response.status}] ${response.url}`, response._data)

      if (typeof response._data === 'string') {
        try {
          response._data = JSON.parse(response._data)
        } catch {
          // leave as string
        }
      }

      if (response.status !== 401) return

      const pathname = pathnameOf(response.url ?? '')
      if (UNAUTHORIZED_EXEMPT_URL_PREFIXES.some(prefix => pathname.startsWith(prefix))) return

      await nuxtApp.runWithContext(() => navigateTo(LOGIN_PATH))
    },
  })

  return {
    provide: {
      api,
    },
  }
})
