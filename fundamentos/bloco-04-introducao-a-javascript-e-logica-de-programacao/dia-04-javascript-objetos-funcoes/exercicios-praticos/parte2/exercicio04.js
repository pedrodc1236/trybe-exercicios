/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

    let arrayNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
    let more = ''

    function moreCharacters() {
        for(let index = 0; index < arrayNames.length; index += 1) {
            if(arrayNames[index].length > more.length) {
                more = arrayNames[index]
            }
        }
        return more
    }

    console.log(moreCharacters())