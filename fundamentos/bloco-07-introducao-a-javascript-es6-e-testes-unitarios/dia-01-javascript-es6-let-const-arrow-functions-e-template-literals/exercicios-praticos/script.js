// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

const newTestingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope)
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope)
    }
}

newTestingScope(false);

// 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const newOddAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens
}

const newOddAndEvensOrder = newOddAndEvens();

console.log(`Os números ${newOddAndEvensOrder} se encontram ordenados de forma crescente!`)

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

oddsAndEvens.sort(function(a,b){
    if(a > b) return 1;

    if(a < b) return -1;

    return 0
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente pelo sort()!`)