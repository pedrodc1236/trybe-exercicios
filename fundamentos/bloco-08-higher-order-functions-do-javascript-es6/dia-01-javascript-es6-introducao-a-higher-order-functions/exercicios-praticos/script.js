// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (callback) => {
    const employees = {
      id1: callback("Pedro Guerra"),
      id2: callback("Luiza Drumond"),
      id3: callback("Carla Paiva"),
    };
    return employees;
  };
  
  const nameEmail = (fullname) => {
    const email = `${fullname.toLowerCase().replace(" ", "_")}@trybe.com`
    const newPerson = {fullname, email};

    return newPerson;
  };
  
//console.log(newEmployees(nameEmail));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
 
const numberCheck = (myNumber, number) =>
myNumber === number

const numberSort = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Parabéns você ganhou!' : 'Tente novamente!';
};

// console.log(numberSort(2, numberCheck));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correction = (arrayCorrect, arrayStudant) => {
  if(arrayCorrect === arrayStudant) {
    return 1
  } else if (arrayCorrect === 'N.A') {
    return 0
  } else {
    return -0.5
  }
};

const checkCorrection = (arrayCorrect, arrayStudant, callback) => {
  let result = 0;
  for(let index = 0; index <= arrayCorrect.length; index += 1) {
    const aux = callback(arrayCorrect[index], arrayStudant[index]);
    result += aux;
  };
  return `O total da contagem de respostas certas é ${result}. `
};

console.log(checkCorrection(RIGHT_ANSWERS, STUDENT_ANSWERS, correction));