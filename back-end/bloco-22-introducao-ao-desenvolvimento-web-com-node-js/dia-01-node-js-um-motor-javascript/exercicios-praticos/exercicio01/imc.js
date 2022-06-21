const readline = require('readline-sync');

const PESO_EM_KG = readline.questionInt('Qual o seu peso em KG?');
const ALTURA_EM_CM = readline.questionFloat('Qual sua Altura em CM?');

const calculaImc = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura: ${altura}`);
  
  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);

  return imc;
}

const main = () => {
  const imc = calculaImc(PESO_EM_KG, ALTURA_EM_CM);

  let situacao = undefined;

  if ( imc < 18.5 ) {
    situacao = 'Abaixo do peso (magreza)';
  } else if ( imc >= 18.5 & imc <= 24.9) {
    situacao = 'Peso normal'
  } else if ( imc >= 25.0 & imc <= 29.9 ) {
    situacao = 'Acima do peso (sobrepeso)'
  } else if ( imc >= 30.0 & imc <= 34.9) {
    situacao = 'Obesidade grau I'
  } else if ( imc >= 35,0 & imc <= 39.9 ) {
    situacao = 'Obesidade grau II'
  } else {
    situacao = 'Obesidade graus III e IV'
  }

  console.log(`IMC: ${Math.round(imc)}. Sua situação na tabela do IMC é '${situacao}'`);
}

main();