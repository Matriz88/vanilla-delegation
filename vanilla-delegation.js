const addDelegateListener = require('./src/addDelegateListener');
const removeDelegateListener = require('./src/removeDelegateListener');

(function exportVanillaDelegation() {
  window.Element.prototype.addDelegateListener = addDelegateListener;
  window.Element.prototype.removeDelegateListener = removeDelegateListener;
  window.NodeList.prototype.addDelegateListener = addDelegateListener;
  window.HTMLCollection.prototype.addDelegateListener = addDelegateListener;
}());
