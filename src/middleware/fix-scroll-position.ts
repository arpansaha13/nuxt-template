/**
 * Named route middleware to handle custom scroll restoration on route transitions.
 * 
 * Nuxt's default scroll restoration can sometimes execute too early during page
 * transitions (e.g., before async layouts/components are mounted), causing pages
 * to scroll to the top prematurely or fail to restore back/forward scroll positions.
 * 
 * This middleware hooks into `page:finish` to wait until the new page has fully loaded
 * before restoring the scroll position saved in `history.state` (or scrolling to the top
 * on fresh page navigation).
 * 
 * Apply it to specific pages using:
 * ```ts
 * definePageMeta({
 *   middleware: 'fix-scroll-position'
 * })
 * ```
 */
export default defineNuxtRouteMiddleware((_to, _from) => {
  // Add a hook that triggers when the page finishes loading
  useNuxtApp().hook('page:finish', () => {
    // Check if there is a scroll position saved in history.state
    if (history.state.scroll) {
      // Scroll to the saved position
      // Note: If `window` is not the scrollable element, then select and use that element instead
      // Note: If smooth scrolling is needed, wrap this line in a `setTimeout`
      window.scrollTo(history.state.scroll)
    } else {
      // If no scroll position is saved, scroll to the top
      window.scrollTo(0, 0)
    }
  })
})
