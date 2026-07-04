/** Login page path (used by $api 401 redirect and auth middleware). */
export const LOGIN_PATH = '/auth/login'

/** Pathname prefixes that skip session checks (login, signup, etc.). */
export const AUTH_PUBLIC_PATH_PREFIXES = ['/auth'] as const

/** API path used to validate an existing session cookie (SSR). */
export const AUTH_SESSION_PATH = '/api/users/me'

/** Pathname prefixes that must not trigger 401 → login (e.g. OTP verify). */
export const UNAUTHORIZED_EXEMPT_URL_PREFIXES: string[] = [
  // '/api/auth/verify/',
]
