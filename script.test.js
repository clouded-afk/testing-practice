const {
    capitalize,
    reverseString,
    calculator,
    analyzeArray,
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

test('average, min, max, and length of an array', () => {
    expect(JSON.stringify(analyzeArray([1,8,3,4,2,6]))).toBe(JSON.stringify({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    }))
})