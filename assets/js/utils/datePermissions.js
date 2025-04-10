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

  // Now check if date is today
  if (!hlavny || !hlavny.datum) {
    // If no date available, default to read-only
    return false
  }

  // Convert both dates to YYYY-MM-DD format for comparison
  const entryDate = moment.unix(hlavny.datum).format('YYYY-MM-DD')
  const todayDate = moment().format('YYYY-MM-DD')

  // Allow editing only if date is today
  return entryDate === todayDate
}
