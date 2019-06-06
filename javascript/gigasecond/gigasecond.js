/**
 *
 * @param {string} date - Unix time stamp
 * @returns {string} Unix time stamp
 */
export function gigasecond (date) {
  return new Date(date.getTime() + (Math.pow(10, 9) * 1000))
}
