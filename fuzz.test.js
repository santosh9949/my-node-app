const fc = require('fast-check');

describe('Fuzz Testing Example with Fast-Check', () => {
  test('adds two numbers', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        const result = a + b;
        expect(typeof result).toBe('number');
      })
    );
  });
});
