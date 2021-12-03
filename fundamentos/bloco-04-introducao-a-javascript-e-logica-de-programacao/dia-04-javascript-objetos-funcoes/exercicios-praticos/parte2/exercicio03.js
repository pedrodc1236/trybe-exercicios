/* 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

    let arrayInteger = [2, 4, 6, 7, 10, 0, -3]; 
    let smaller = 1000000000000000
    let positionLowerValue = 0

    function lowerValue() {
        for(let index = 0; index < arrayInteger.length; index += 1) {            
            if(arrayInteger[index] < smaller) {
                smaller = arrayInteger[index];
                positionLowerValue = index
            }
        }
        return positionLowerValue
    }

    console.log(lowerValue())