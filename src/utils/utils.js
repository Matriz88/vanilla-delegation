/**
 * in case string alteration needed in the future
 * @param {Array} text
 * @returns {string}
 */
export function createKey(text) {
  return text.join('');
}

/**
 * check valid string
 * @param eventType
 * @returns {boolean}
 */
export function isValidString(eventType) {
  return typeof eventType === 'string' && eventType !== '';
}
