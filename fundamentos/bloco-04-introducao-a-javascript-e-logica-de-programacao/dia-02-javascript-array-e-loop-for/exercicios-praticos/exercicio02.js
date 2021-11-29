    /* 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */

    /* Maneira simples e demorada */
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
    console.log(sum)

    /* Utilizando o for */ 
    /* OBS: foi adicionado um 2 na frente de cada variavél para uma forma não atrapalhar a outra.*/
    let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let sum2 = 0

    for(let index2 = 0; index2 < numbers2.length; index2 += 1) {
         sum2 += numbers2[index2]
    }
    console.log(sum2)
    