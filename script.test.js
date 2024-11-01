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

describe('calculator', () => {
    it('adds two numbers', () => {
        expect(calculator.add(45, 15)).toEqual(60)
    })
    it('subtracts two numbers', () => {
        expect(calculator.subtract(45, 15)).toEqual(30)
    })
    it('multiplys two numbers', () => {
        expect(calculator.multiply(5, 9)).toEqual(45)
    })
    it('divides two numbers', () => {
        expect(calculator.divide(45, 15)).toEqual(3)
    })
})