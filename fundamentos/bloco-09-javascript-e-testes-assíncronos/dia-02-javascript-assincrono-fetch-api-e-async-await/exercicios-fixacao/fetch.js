const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Para fixar
// Responda às perguntas a seguir para ter certeza de que você entendeu os textos. Discuta a resposta com o restante da turma (que tal uma pessoa abrir uma conversa no Slack para conversarem a respeito?!). Se bater alguma dúvida, volte aos textos!

// O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
//r: modo assíncrono ele não tem que esperar a primeira linha ser executada primeiro, ele executa em segundo plano. O código assíncrono não trava a fila de exercução, ou seja nao é necessário a proxima instrução não esperar o fim da instrução assíncrona para iniciar.


// Quando você tem que enfileirar várias callbacks , que problema surge?
//r: O famoso "callback hell", que é uma sequencia de varias callbacks uma dentro da outra o que dificulta a leitura do código.

// Por que as Promises são uma forma de resolver esse problema?
//r: as promises permitem que o fluxo de ações assíncronas seja escrito de uma forma similar a um fluxo de ações síncronas, garantindo também formas concicas e centralizadas de capturar possíveis erros durante a execução.

// Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
//r: Assíncrona, porque não se tem o controle do tempo e da integridade da resposta da API.

// Dada a resposta anterior, o que é fetch e para que ele serve?
//r: Fetch é uma função que faz uma requisição à API, ela tem ferramentas para tratas os dados que são recebidos, tanto no sucesso quanto no erro.