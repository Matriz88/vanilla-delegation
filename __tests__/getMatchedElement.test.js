const _sut = require('../src/utils/_getMatchedElement');

describe('_getMatchedElement test', () => {
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

  test('matching not found, return false', () => {
    const attachedElement = document.querySelector('div');
    const element = document.querySelector('a');
    const selector = 'section';

    let result = _sut(attachedElement, element, selector);

    // asserts
    expect(result).toBeFalsy();
  });

  test('matching found, element found returned', () => {
    const attachedElement = document.querySelector('div');
    const element = document.querySelector('span');
    const selector = 'a';

    let result = _sut(attachedElement, element, selector);

    // asserts
    expect(result).toEqual(document.querySelector('a'));
  });

  test('matching not found, document is attachedElement, return false', () => {
    const attachedElement = document;
    const element = document.querySelector('span');
    const selector = 'section';

    let result = _sut(attachedElement, element, selector);

    // asserts
    expect(result).toBeFalsy();
  });
});
