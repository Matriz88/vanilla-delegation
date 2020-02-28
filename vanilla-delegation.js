import addDelegateListener from './src/addDelegateListener';
import removeDelegateListener from './src/removeDelegateListener';

(function exportVanillaDelegation() {
  window.Element.prototype.addDelegateListener = addDelegateListener;
  window.Element.prototype.removeDelegateListener = removeDelegateListener;
  window.NodeList.prototype.addDelegateListener = addDelegateListener;
  window.HTMLCollection.prototype.addDelegateListener = addDelegateListener;
}());
