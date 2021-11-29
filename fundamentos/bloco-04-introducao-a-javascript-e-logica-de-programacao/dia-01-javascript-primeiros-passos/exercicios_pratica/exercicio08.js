/* 8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */

    const number1 = 7;
    const number2 = 10;
    const number3 = 1;

    if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }