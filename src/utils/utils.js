/**
 * in case string alteration needed in the future
 * @param {Array} text
 * @returns {string}
 */
const createKey = function createKey(text) {
  return text.join('');
};

/**
 * check valid string
 * @param eventType
 * @returns {boolean}
 */
const isValidString = function isValidString(eventType) {
  return typeof eventType === 'string' && eventType !== '';
};

module.exports = {
  createKey,
  isValidString,
};
