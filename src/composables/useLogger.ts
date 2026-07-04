/**
 * Context-labeled logger. `debug` is DEV-only.
 *
 * @example
 * const logger = useLogger('MyComponent')
 * logger.error('Failed to fetch data', error)
 */
export function useLogger(contextLabel: string) {
  return {
    debug: (message: string, data?: unknown) => {
      if (import.meta.env.DEV) {
        console.debug(`[${contextLabel}] ${message}`, data)
      }
    },

    info: (message: string, data?: unknown) => {
      console.info(`[${contextLabel}] ${message}`, data)
    },

    warn: (message: string, data?: unknown) => {
      console.warn(`[${contextLabel}] ${message}`, data)
    },

    error: (message: string, error?: Error | unknown) => {
      console.error(`[${contextLabel}] ${message}`, error)
    },
  }
}
