import addDelegateListener from '../src/addDelegateListener';
import removeDelegateListener from '../src/removeDelegateListener';

import '../vanilla-delegation';

describe('vanilla-delegation test', () => {
  test('sets correct prototypes', () => {
    expect(window.Element.prototype.addDelegateListener).toBe(addDelegateListener);
    expect(window.Element.prototype.removeDelegateListener).toBe(removeDelegateListener);
    expect(window.NodeList.prototype.addDelegateListener).toBe(addDelegateListener);
  });
});
