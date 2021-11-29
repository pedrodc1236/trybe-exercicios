/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

    const number1 = 17;
    const number2 = 18;
    const number3 = 12;

    if (number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1) {
        console.log(true)
    } else {
        console.log(false)
    }