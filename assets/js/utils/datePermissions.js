import moment from 'moment'

/**
 * Check if a user can edit the data based on date and permissions
 * @param {Object} hlavny - The main entry object
 * @param {Object} opravnenia - The user permissions object
 * @returns {Boolean} - Whether the user can edit the data
 */
export const canEditData = (hlavny, opravnenia) => {
  // First check if user has editor permissions at all
  if (!opravnenia.editor) {
    return false
  }

  // Now check if date is within the allowed range (today, yesterday, or day before yesterday)
  if (!hlavny || !hlavny.datum) {
    // If no date available, default to read-only
    return false
  }

  // Convert entry date to moment object
  const entryDate = moment.unix(hlavny.datum)
  const today = moment().startOf('day')

  // Calculate the difference in days
  const daysDifference = today.diff(entryDate.startOf('day'), 'days')

  // Allow editing only if date is today, yesterday, or day before yesterday (0, 1, or 2 days ago)
  return daysDifference >= 0 && daysDifference <= 2
}
