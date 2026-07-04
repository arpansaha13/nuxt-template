import {
  AUTH_PUBLIC_PATH_PREFIXES,
  AUTH_SESSION_PATH,
  LOGIN_PATH,
} from '~/utils/auth'

/**
 * Optional session gate. Not global — attach with:
 *   definePageMeta({ middleware: 'auth' })
 *
 * Adjust AUTH_* constants in ~/utils/auth for your API and public routes.
 */
export default defineNuxtRouteMiddleware(async to => {
  if (AUTH_PUBLIC_PATH_PREFIXES.some(prefix => to.path.startsWith(prefix))) {
    return
  }

  // Cookie is only reliable for this check on the server in SSR apps.
  if (import.meta.client) return

  const runtimeConfig = useRuntimeConfig()
  const cookieName = (runtimeConfig.authCookieName as string) || 'session'
  const sessionCookie = useCookie<string | null>(cookieName)

  if (!sessionCookie.value) {
    return navigateTo(LOGIN_PATH)
  }

  try {
    const { $api } = useNuxtApp()
    await $api(AUTH_SESSION_PATH)
  } catch {
    return navigateTo(LOGIN_PATH)
  }
})
