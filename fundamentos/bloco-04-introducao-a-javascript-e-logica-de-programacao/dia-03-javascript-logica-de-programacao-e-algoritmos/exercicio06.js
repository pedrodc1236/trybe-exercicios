/* 6- Faça um programa que diz se um número definido numa variável é primo ou não. */

    let n = 97;
    let stock = [];
    

    for(let index = 0; index <= n; index += 1) {
        if(n % index === 0) {
            stock.push(index)
        }
    }

    if (n === 1) {
        console.log("O número um não é primo pois é dividido apenas por ele mesmo!")
    }else if(stock.length <= 2) {
        console.log("O número " + n + " é um número primo")
    }else {
        console.log("O número " + n + " não é um número primo")
    }
            
        
    

