/**
 * Sort entries by date field (DESC) and then by id (ASC)
 * Null dates are placed first
 *
 * @param {Array} entries - Array of entries to sort
 * @param {string} dateField - Name of the date field to sort by (default: 'datum_cas_zaciatok')
 * @returns {Array} Sorted array of entries
 */
export const sortEntriesByDateAndId = (entries, dateField = 'datum_cas_zaciatok') => {
  return [...entries].sort((a, b) => {
    // Handle null dates - nulls come first
    if (!a[dateField] && !b[dateField]) {
      // Both null, sort by id ASC
      return a.id - b.id
    }
    if (!a[dateField]) return -1 // a is null, comes first
    if (!b[dateField]) return 1 // b is null, comes first

    // Both have dates, sort by date DESC
    if (a[dateField] !== b[dateField]) {
      return b[dateField] - a[dateField] // DESC order
    }

    // Dates are equal, sort by id ASC
    return a.id - b.id
  })
}
