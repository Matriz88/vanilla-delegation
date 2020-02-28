import addDelegateListener from '../src/addDelegateListener';

describe('addDelegateListener test', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div>
      <a href="#">
        <span>text</span>
      </a>
    </div>
    <div>
      <a href="#">
        <span>text</span>
      </a>
    </div>
    `;
  });

  test('no event, no selector, listener not added', () => {
    const elMock = document.querySelector('div');
    const handlerMock = function handlerMock() {
      return true;
    };
    elMock.addEventListener = jest.fn(() => true);

    // sut
    addDelegateListener(elMock, '', '', handlerMock, false);
    expect(elMock.delegatedListenersList).toBeUndefined();
    expect(elMock.addEventListener.mock.calls.length).toBe(0);
  });

  test('correct arguments, listener added', () => {
    const elMock = document.querySelector('div');
    const handlerMock = function handlerMock() {
      return true;
    };
    elMock.addEventListener = jest.fn(() => true);

    // sut
    addDelegateListener.call(elMock, 'click', 'a', handlerMock, false);
    expect('handlerMockafalse' in elMock.delegatedListenersList).toBeTruthy();
    expect(elMock.addEventListener.mock.calls.length).toBe(1);
  });

  test('correct arguments, listener added once if run twice', () => {
    const elMock = document.querySelector('div');
    const handlerMock = function handlerMock() {
      return true;
    };
    elMock.addEventListener = jest.fn(() => true);

    // sut
    // bind it twice
    addDelegateListener.call(elMock, 'click', 'a', handlerMock, false);
    addDelegateListener.call(elMock, 'click', 'a', handlerMock, false);
    expect('handlerMockafalse' in elMock.delegatedListenersList).toBeTruthy();
    expect(elMock.addEventListener.mock.calls.length).toBe(1);
  });

  test('this is not Element, listener not added', () => {
    const elMock = {};
    const handlerMock = function handlerMock() {
      return true;
    };
    elMock.addEventListener = jest.fn(() => true);

    // sut
    addDelegateListener(elMock, 'click', 'a', handlerMock, false);
    expect(elMock.delegatedListenersList).toBeUndefined();
    expect(elMock.addEventListener.mock.calls.length).toBe(0);
  });

  test('correct arguments, listener added to NodeList with querySelectorAll', () => {
    const elMock = document.querySelectorAll('div');
    const handlerMock = function handlerMock() {
      return true;
    };
    elMock.forEach((el) => { el.addEventListener = jest.fn(() => true); });

    // sut
    addDelegateListener.call(elMock, 'click', 'a', handlerMock, false);
    elMock.forEach((el) => expect('handlerMockafalse' in el.delegatedListenersList).toBeTruthy());
    elMock.forEach((el) => expect(el.addEventListener.mock.calls.length).toBe(1));
  });

  test('correct arguments, listener added to HTMLCollection with getElementsByTagName', () => {
    const elMock = document.getElementsByTagName('div');
    const handlerMock = function handlerMock() {
      return true;
    };
    [...elMock].forEach((el) => { el.addEventListener = jest.fn(() => true); });

    // sut
    addDelegateListener.call(elMock, 'click', 'a', handlerMock, false);
    [...elMock].forEach((el) => expect('handlerMockafalse' in el.delegatedListenersList).toBeTruthy());
    [...elMock].forEach((el) => expect(el.addEventListener.mock.calls.length).toBe(1));
  });
});
