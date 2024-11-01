const {
    capitalize,
    reverseString,
    calculator,
} = require('./script');

test('capitalizes first character of a string', () => {
    expect(capitalize('stop')).toBe('Stop');
    expect(capitalize('Llama')).toBe('Llama');
    expect(capitalize('10Love')).toBe('10Love');
})

test('reverses a string', () => {
    expect(reverseString('flamingo')).toBe('ognimalf')
    expect(reverseString('10Love')).toBe('evoL01')
})