const { writeFile } = require('fs');

const fs = require('fs').promises;

//Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
const readAll = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`)
  
  strings.forEach((string) => console.log(string));
}


// const main = () => {
//   readAll();
// }

// main();

//Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const getSimpsonById = async (id) => { 
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id );

  if (!chosenSimpson) {
    throw new Error('id não encontrado!');
  }

  return chosenSimpson;
}

// const main = async () => {
//   const simpson = await getSimpsonById(1);
//   console.log(simpson);
// }

// main();

//Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const filterSimpsons = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
};

// const main = () => {
//   filterSimpsons();
// }

// main();

//Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const createSimpsonsFamily = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpson = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];

  const simpsonFamily = simpson.filter((simpson) => familyIds.includes(Number(simpson.id)))
  console.log(simpsonFamily);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonFamily));
};

// const main = () => {
//   createSimpsonsFamily();
// }

// main();

//Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
const addNelsonToFamily = async () => {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonFamily = JSON.parse(fileContent);

  simpsonFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonFamily))
}

// const main = () => {
//   addNelsonToFamily();
// }

// main();

//Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
const replaceNelson = async () => {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.name !== 'Nelson Muntz');

  const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, { id: '15', name: 'Maggie Simpson' } ]

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));

}

const main = () => {
  replaceNelson();
}

main();



