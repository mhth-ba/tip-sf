/**
 * Removes diacritic marks (accents) from a string
 * @param {string} text - The input text with diacritics
 * @returns {string} Text without diacritics
 */
export const removeDiacritics = text => {
  // Ensure text is a string
  if (!text) return ''

  // Convert to string if it's not already one
  const textStr = String(text)

  // Slovak-specific mapping of characters with diacritics to their basic form
  const diacriticsMap = {
    á: 'a',
    ä: 'a',
    č: 'c',
    ď: 'd',
    é: 'e',
    í: 'i',
    ĺ: 'l',
    ľ: 'l',
    ň: 'n',
    ó: 'o',
    ô: 'o',
    ŕ: 'r',
    š: 's',
    ť: 't',
    ú: 'u',
    ý: 'y',
    ž: 'z',
    Á: 'A',
    Ä: 'A',
    Č: 'C',
    Ď: 'D',
    É: 'E',
    Í: 'I',
    Ĺ: 'L',
    Ľ: 'L',
    Ň: 'N',
    Ó: 'O',
    Ô: 'O',
    Ŕ: 'R',
    Š: 'S',
    Ť: 'T',
    Ú: 'U',
    Ý: 'Y',
    Ž: 'Z'
  }

  return textStr.replace(/[^\u0000-\u007E]/g, char => diacriticsMap[char] || char)
}

/**
 * Performs diacritic-insensitive string comparison (case-insensitive too)
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} True if strings match ignoring diacritics and case
 */
export const diacriticMatch = (str1, str2) => {
  if (!str1 || !str2) return false

  try {
    const normalizedStr1 = removeDiacritics(str1).toLowerCase()
    const normalizedStr2 = removeDiacritics(str2).toLowerCase()

    return normalizedStr1.includes(normalizedStr2) || normalizedStr2.includes(normalizedStr1)
  } catch (error) {
    console.error('Error in diacriticMatch:', error, { str1, str2 })
    return false
  }
}

/**
 * Performs diacritic-insensitive filtering on an array of objects
 * @param {Array} items - Array of objects to filter
 * @param {string} searchTerm - Search term
 * @param {Array|string} fields - Field or fields to search within each object
 * @returns {Array} Filtered array of objects
 */
export const diacriticFilter = (items, searchTerm, fields) => {
  if (!items || !items.length || !searchTerm) {
    return items || []
  }

  const fieldsToSearch = Array.isArray(fields) ? fields : [fields]
  const normalizedSearchTerm = removeDiacritics(searchTerm).toLowerCase()

  return items.filter(item => {
    return fieldsToSearch.some(field => {
      const fieldValue = item[field]
      if (fieldValue === undefined || fieldValue === null) return false

      try {
        const normalizedFieldValue = removeDiacritics(fieldValue).toLowerCase()
        return normalizedFieldValue.includes(normalizedSearchTerm)
      } catch (error) {
        console.error('Error in diacriticFilter:', error, { fieldValue })
        return false
      }
    })
  })
}
