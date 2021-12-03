/* 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata". */

    let player = {
        name: 'Marta',
        lastName: 'Silva',
        age: 34,
        medals: {
            golden: 2, 
            silver: 3,
        },
        bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
        medals: ['2 medalhas de ouro', '3 medalhas de prata'],
    };

    console.log("A jogadora possui " + player.medals[0] + " e " + player.medals[1] + ".")
