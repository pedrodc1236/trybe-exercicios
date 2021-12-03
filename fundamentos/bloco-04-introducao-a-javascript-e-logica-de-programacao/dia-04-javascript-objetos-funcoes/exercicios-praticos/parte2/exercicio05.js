/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

    let arrayInteger = [2, 3, 2, 5, 8, 2, 3, 2];
    
    function MoreRepeat() {        
        let numberRepeat = 0;
        let numberMoreRepeat = 0
        let goReturn = 0
        
        for(let index = 0; index < arrayInteger.length; index += 1) {
            for(let secondIndex = 1; secondIndex < arrayInteger.length; secondIndex += 1) {
                if(arrayInteger[index] === arrayInteger[secondIndex]) {
                    numberRepeat += 1
                }
            }
            if(numberRepeat > numberMoreRepeat) {
                numberMoreRepeat = numberRepeat
                goReturn = arrayInteger[index]
            }
            numberRepeat = 0
        }
        return goReturn            
    }

    console.log(MoreRepeat())