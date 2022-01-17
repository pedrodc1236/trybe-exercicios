const myFizzBuzz = require('./myFizzBuzz');

describe('Exercicio 3', () => {
    it('test myFizzBuzz function', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(25)).toBe('buzz');
        expect(myFizzBuzz(1)).toBe(1);
        expect(myFizzBuzz('1')).toBe(false);

    });
});