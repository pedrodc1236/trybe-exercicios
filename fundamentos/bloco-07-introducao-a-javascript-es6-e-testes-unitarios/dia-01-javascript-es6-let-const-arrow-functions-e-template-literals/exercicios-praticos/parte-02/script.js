// 1- Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(5));

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(6));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

