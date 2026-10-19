const DEFAULT_OPTIONS = { day: 'numeric', month: 'long', year: 'numeric' }

/** Formats an ISO date (YYYY-MM-DD) for display, independent of the viewer's time zone. */
export function formatDate(iso, options = DEFAULT_OPTIONS) {
  return new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))
}
