/* eslint-disable no-magic-numbers,quotes */
const _getMatchedElement = require('../src/getMatchedElement');
const _createInternalHandler = require('../src/createInternalHandler');
jest.mock('../src/getMatchedElement');

describe('getMatchedElement test', () => {
  beforeAll(() => {
    document.body.innerHTML =
      `
    <div>
      <a href="#">
        <span>text</span>
      </a>
    </div>
    `;
  });

  test('if match, calls handler', () => {
    const selector = 'a';
    const elementMatchingSelector = document.querySelector(selector);
    const elementWithAttachedListener = document.querySelector('div');
    const elementTriggered = document.querySelector('span');
    const eventMock = {
      'target': elementTriggered
    };
    _getMatchedElement.mockReturnValue(elementMatchingSelector);
    const myHandler = jest.fn(() => true);
    const internalHandler = _createInternalHandler(elementWithAttachedListener, selector, myHandler);
    internalHandler(eventMock);
    expect(myHandler.mock.calls.length).toBe(1);
    expect(eventMock.delegateTarget).toBe(elementWithAttachedListener);
  });

  test(`no match, doesn't call handler`, () => {
    const selector = 'a';
    const elementWithAttachedListener = document.querySelector('div');
    const elementTriggered = document.querySelector('span');
    const eventMock = {
      'target': elementTriggered
    };
    _getMatchedElement.mockReturnValue(false);
    const myHandler = jest.fn(() => true);
    const internalHandler = _createInternalHandler(elementWithAttachedListener, selector, myHandler);
    internalHandler(eventMock);
    expect(myHandler.mock.calls.length).toBe(0);
  });
});
