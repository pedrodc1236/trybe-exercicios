
/* 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */

    let array = []    
    let result = []

    for (let index = 1; index <= 25; index += 1) {        
        array.push(index)
    }

    for (let cont = 0; cont < array.length; cont += 1) {
        let division = array[cont] / 2;
        result.push(division)
    }

    console.log(result)