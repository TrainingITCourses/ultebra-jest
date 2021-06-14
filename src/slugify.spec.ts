import { slugify } from './slugify';
describe('GIVEN: a Slugify function', () => {
  it('WHEN called with hello THEN returns hello', () => {
    // Act
    const actual = slugify('hello');
    // Assert
    const expected = 'hello';
    expect(actual).toStrictEqual(expected);
  });
  it('WHEN called with Hello THEN returns hello', () => {
    // Act
    const actual = slugify('Hello');
    // Assert
    const expected = 'hello';
    expect(actual).toStrictEqual(expected);
  });
  it('WHEN called with hello world THEN returns hello_world', () => {
    // Act
    const actual = slugify('hello world');
    // Assert
    const expected = 'hello_world';
    expect(actual).toStrictEqual(expected);
  });
  it('WHEN called with hello world! THEN returns hello_world', () => {
    // Act
    const actual = slugify('hello world!');
    // Assert
    const expected = 'hello_world';
    expect(actual).toStrictEqual(expected);
  });
  it('WHEN called with hello world!ñ THEN returns hello_world-', () => {
    // Act
    const actual = slugify('hello world!ñ');
    // Assert
    const expected = 'hello_world-';
    expect(actual).toStrictEqual(expected);
  });
});
