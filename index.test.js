const greet = require('./index');

describe('greet function', () => {
  test('should return "Hello, World!" when no name is provided', () => {
    expect(greet()).toBe('Hello, World!');
  });

  test('should return "Hello, [name]!" when a name is provided', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });
});
