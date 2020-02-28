/* eslint-disable no-magic-numbers */
import removeDelegateListener from '../src/removeDelegateListener';

describe('removeDelegateListener test', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div>
      <a href="#">
        <span>text</span>
      </a>
    </div>
    `;
  });

  test('no event, no selector, listener not removed and  removeEventListener not called', () => {
    const elMock = document.querySelector('div');
    elMock.delegatedListenersList = [];
    elMock.delegatedListenersList.randomkey = {
      eventType: '',
      internalHandler: null,
    };
    elMock.removeEventListener = jest.fn(() => true);

    removeDelegateListener.call(elMock, '', '', null);

    // assert
    expect('randomkey' in elMock.delegatedListenersList).toBeTruthy();
    expect(elMock.removeEventListener.mock.calls.length).toBe(0);
  });

  test('correct arguments, listener removed and removeEventListener called', () => {
    const elMock = document.querySelector('div');

    const handlerMock = function handlerMock() {
      return true;
    };
    elMock.delegatedListenersList = [];
    elMock.delegatedListenersList.handlerMockspanfalse = {
      eventType: 'click',
      internalHandler: handlerMock,
    };
    elMock.removeEventListener = jest.fn(() => true);

    removeDelegateListener.call(elMock, 'click', 'span', handlerMock, false);

    // assert
    expect('handlerMockspanfalse' in elMock.delegatedListenersList).toBeFalsy();
    expect(elMock.removeEventListener).toBeCalledWith('click', handlerMock, false);
    expect(elMock.removeEventListener.mock.calls.length).toBe(1);
  });
});
