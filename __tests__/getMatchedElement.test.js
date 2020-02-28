import getMatchedElement from '../src/utils/_getMatchedElement';

describe('_getMatchedElement test', () => {
  beforeEach(() => {
    document.body.innerHTML = `
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

    const result = getMatchedElement(attachedElement, element, selector);

    // asserts
    expect(result).toBeFalsy();
  });

  test('matching found, element found returned', () => {
    const attachedElement = document.querySelector('div');
    const element = document.querySelector('span');
    const selector = 'a';

    const result = getMatchedElement(attachedElement, element, selector);

    // asserts
    expect(result).toEqual(document.querySelector('a'));
  });

  test('matching not found, document is attachedElement, return false', () => {
    const attachedElement = document;
    const element = document.querySelector('span');
    const selector = 'section';

    const result = getMatchedElement(attachedElement, element, selector);

    // asserts
    expect(result).toBeFalsy();
  });
});
