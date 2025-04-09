/**
 * Debounce function - delays the processing of the function until
 * after wait milliseconds have elapsed since the last time it was invoked
 *
 * @param {Function} func - The function to debounce
 * @param {Number} wait - The number of milliseconds to delay
 * @return {Function} - The debounced function
 */
export default function debounce(func, wait) {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
