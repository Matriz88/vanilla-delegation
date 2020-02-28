/* eslint-disable no-magic-numbers,quotes */
const getMatchedElement = require('../src/utils/_getMatchedElement');
const sut = require('../src/utils/_createInternalHandler');

// mock
jest.mock('../src/utils/_getMatchedElement');

describe('_createInternalHandler test', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div>
      <a href="#">
        <span>text</span>
      </a>
    </div>
    `;
  });

  test('matches, calls handler', () => {
    const selector = 'a';
    const elementMatchingSelector = document.querySelector(selector);
    const elementWithAttachedListener = document.querySelector('div');
    const elementTriggered = document.querySelector('span');
    const eventMock = {
      target: elementTriggered,
    };

    getMatchedElement.mockReturnValue(elementMatchingSelector);
    const myHandler = jest.fn(() => true);
    const internalHandler = sut(elementWithAttachedListener, selector, myHandler);
    internalHandler(eventMock);

    // asserts
    expect(myHandler.mock.calls.length).toBe(1);
    expect(myHandler).toBeCalledWith(eventMock);
    expect(eventMock.delegateTarget).toBe(elementWithAttachedListener);
  });

  test(`no match, doesn't call handler`, () => {
    const selector = 'a';
    const elementWithAttachedListener = document.querySelector('div');
    const elementTriggered = document.querySelector('span');
    const eventMock = {
      target: elementTriggered,
    };

    getMatchedElement.mockReturnValue(false);
    const myHandler = jest.fn(() => true);
    const internalHandler = sut(elementWithAttachedListener, selector, myHandler);
    internalHandler(eventMock);

    // asserts
    expect(myHandler.mock.calls.length).toBe(0);
  });
});
