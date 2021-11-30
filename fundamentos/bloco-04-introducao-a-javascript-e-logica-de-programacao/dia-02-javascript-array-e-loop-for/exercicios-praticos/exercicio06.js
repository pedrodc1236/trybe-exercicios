/* 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    let odd = 0;

    for(let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] % 2 === 1) {
            odd += 1
        }
    }

    if (odd > 0) {
        console.log('Contém ' + odd + ' números ímparas no Array.')
    } else {
        console.log('Nenhum valor ímpar encontrado')
    }