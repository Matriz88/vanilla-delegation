const addDelegateListener = require('../src/addDelegateListener');
const removeDelegateListener = require('../src/removeDelegateListener');
require('../vanilla-delegation');

describe('vanilla-delegation test', () => {
  test('sets correct prototypes', () => {
    expect(window.Element.prototype.addDelegateListener).toBe(addDelegateListener);
    expect(window.Element.prototype.removeDelegateListener).toBe(removeDelegateListener);
    expect(window.NodeList.prototype.addDelegateListener).toBe(addDelegateListener)
  });
});
