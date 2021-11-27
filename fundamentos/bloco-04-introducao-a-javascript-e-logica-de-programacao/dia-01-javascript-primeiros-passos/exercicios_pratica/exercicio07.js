    /* 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
    Porcentagem >= 90 -> A
    Porcentagem >= 80 -> B
    Porcentagem >= 70 -> C
    Porcentagem >= 60 -> D
    Porcentagem >= 50 -> E
    Porcentagem < 50 -> F
    O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

    let note = 49;

    if (note >= 90 && note <= 100) {
        console.log("A")
    } else if (note >= 80 && note < 90){
        console.log("B")
    } else if (note >= 70 && note < 80) {
        console.log("C")
    } else if (note >= 60 && note < 70) {
        console.log("D")
    } else if (note >= 50 && note < 60) {
        console.log("E")
    } else if (note >= 0 && note < 50) {
        console.log ("F")
    } else if (note < 0 || note > 100) {
        console.log ("Error")
    }