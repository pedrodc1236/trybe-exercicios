/* 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
 */

let arrayInteger = [2, 3 ,6, 10, 4, 1];
let bigger = 0
let indexBigger = 0 

function highestValue () {
    for (let index = 0; index < arrayInteger.length; index += 1) {
        if(bigger < arrayInteger[index]) {
            bigger = arrayInteger[index]
            indexBigger = index
        }
    }
    return indexBigger
}

console.log(highestValue())