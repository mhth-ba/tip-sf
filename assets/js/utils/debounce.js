/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified wait time has elapsed since the last time it was invoked.
 *
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @param {boolean} [immediate=false] - Whether to invoke the function on the leading edge instead of trailing
 * @returns {Function} - The debounced function
 */
const debounce = (func, wait, immediate = false) => {
  let timeout

  return function executedFunction(...args) {
    const context = this

    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}

export default debounce
