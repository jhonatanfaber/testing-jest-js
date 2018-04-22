import { fizzBuzz, getRomanNumber } from '../src';

describe.skip('FizzBuzz Tests', () => {

    test('Deberia debolver Fizz si number es divi entre 3', () => {
        expect(fizzBuzz(6)).toBe('FIZZ')
        expect(fizzBuzz(18)).toBe('FIZZ')
        expect(fizzBuzz(21)).toBe('FIZZ')
    })

    test('Deberia debolver Buzz si number es divi entre 5', () => {
        expect(fizzBuzz(5)).toBe('BUZZ')
    })

    test('Deberia debolver FizzBuzz si number es divi entre 5 y 3', () => {
        expect(fizzBuzz(15)).toBe('FIZZBUZZ')
    })
})

describe('Roman number tests', () => {
    test('should return I when reads 1', () => {
        expect(getRomanNumber(44)).toBe("XLIV")
    })

})