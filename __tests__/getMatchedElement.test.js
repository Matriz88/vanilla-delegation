const _sut = require('../src/utils/_getMatchedElement');

describe('_getMatchedElement test', () => {
  beforeEach(() => {
    document.body.innerHTML =
      `
    <div>
      <a href="#">
        <span>text</span>
      </a>
    </div>
    `;
  });

  test('matching found, element found returned', () => {
    const attachedElement = document.querySelector('div');
    const element = document.querySelector('span');
    const selector = 'a';

    let result = _sut(attachedElement, element, selector);

    // asserts
    expect(result).toEqual(document.querySelector('a'));
  });

  test('matching found, document is attachedElement, element found returned', () => {
    const attachedElement = document;
    const element = document.querySelector('span');
    const selector = 'span';

    let result = _sut(attachedElement, element, selector);

    // asserts
    expect(result).toEqual(document.querySelector('span'));
  });

  test('matching found, attachedElement is element, element found returned', () => {
    const element = document.querySelector('span');
    const selector = 'span';

    let result = _sut(element, element, selector);

    // asserts
    expect(result).toEqual(document.querySelector('span'));
  });

  test('matching not found, return false', () => {
    const attachedElement = document.querySelector('div');
    const element = document.querySelector('a');
    const selector = 'section';

    let result = _sut(attachedElement, element, selector);

    // asserts
    expect(result).toBeFalsy();
  });

  test('matching not found, document is attachedElement, return false', () => {
    const attachedElement = document;
    const element = document.querySelector('span');
    const selector = 'section';

    let result = _sut(attachedElement, element, selector);

    // asserts
    expect(result).toBeFalsy();
  });

  test('matching not found, attachedElement is element, return false', () => {
    const element = document.querySelector('span');
    const selector = 'section';

    let result = _sut(element, element, selector);

    // asserts
    expect(result).toBeFalsy();
  });
});
