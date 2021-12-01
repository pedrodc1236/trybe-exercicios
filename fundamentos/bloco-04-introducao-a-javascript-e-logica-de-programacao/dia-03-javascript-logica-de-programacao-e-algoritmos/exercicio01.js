    /* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: */

    let n = 10;
    let square = ''

    for(let linha = 1; linha <= n; linha += 1) {
        for(let coluna = 1; coluna <= n; coluna += 1) {
            square += '*'          
        }
        console.log(square)
        square = ''
    }