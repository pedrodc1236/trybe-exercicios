const sum = require('./sum');

describe('Exercicio 1', () => {
    it('Text sum function', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });
    it('Test error', () => {
        expect(() => sum(4, '5')).toThrowError
        ();
        expect(() => sum(4, '5')).toThrowError
        ('parameters must be numbers');
    })
});

