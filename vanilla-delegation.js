const addDelegateListener = require('./src/addDelegateListener');
const removeDelegateListener = require('./src/removeDelegateListener');

(function () {
  window.Element.prototype.addDelegateListener = addDelegateListener;
  window.Element.prototype.removeDelegateListener = removeDelegateListener;
  window.NodeList.prototype.addDelegateListener = addDelegateListener
})();
