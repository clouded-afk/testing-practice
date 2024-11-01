const capitalize = require('./script');

test('capitalizes first character of a string', () => {
    expect(capitalize('stop')).toBe('Stop');
    expect(capitalize('Llama')).toBe('Llama');
    expect(capitalize('10Love')).toBe('10Love');
})