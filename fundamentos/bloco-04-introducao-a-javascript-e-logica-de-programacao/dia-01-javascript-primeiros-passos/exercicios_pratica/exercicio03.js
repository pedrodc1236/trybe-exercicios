  /*  3. Faça um programa que retorne o maior de três números.
     Defina no começo do programa três constantes com os valores que serão comparados.*/

    const numberOne = 11;
    const numberTwo = 11;
    const numberThree = 7;

    if (numberOne > numberTwo && numberOne > numberThree) {
        console.log(numberOne)
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        console.log(numberTwo)
    } else if (numberThree > numberOne && numberThree > numberTwo) {
        console.log(numberThree)
    } else if (numberOne === numberTwo && numberOne === numberThree){
        console.log("Foram digitados três números iguais !")
    } else if (numberOne === numberTwo || numberOne === numberThree) {
        console.log("Foram digitados dois números iguais !")
    } else if (numberTwo === numberOne || numberTwo === numberThree) {
        console.log("Foram digitados dois números iguais !")
    }
