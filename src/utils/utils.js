/**
 * in case string alteration needed in the future
 * @param {Array} text
 * @returns {string}
 */
const _createKey = function (text) {
  return text.join('')
};

/**
 * check valid string
 * @param eventType
 * @returns {boolean}
 */
const _isValidString = function (eventType) {
  return typeof eventType === 'string' && eventType !== '';
};

module.exports = {
  _createKey,
  _isValidString
};
