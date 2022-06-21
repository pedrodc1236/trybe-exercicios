const fs = require('fs').promises;

const express = require('express');
const bodyParser = require('body-parser');
const { param } = require('express/lib/request');
const { get } = require('express/lib/response');

const app = express();
app.use(bodyParser.json());

//exercicio 01
app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' })
});

//exercicio 02
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}!` });
}); 

//exercicio 03
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(Number(age) <= 17) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return res.status(200).json({ message: `Hello, ${name}!` })
});

//exercicio 04
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
})

//exercicio 05
const getSimpsons = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  return simpsons;
}

const setSimpsons = (newSimpsons) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

//exercicio 06
app.get('/simpsons', async (_req, res) => {
  const simpsons = await getSimpsons();
  const simpsonsName = simpsons.map((simpson) => `${simpson.name}`)
  return res.status(200).json(simpsonsName);
});

//exercicio 07
app.get('/simpsons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const simpsons = await getSimpsons();
    const filteredSimpson = simpsons.find((simpson) => simpson.id === id );
  
    if(!filteredSimpson) return res(404).json({ message: 'simpson not found' });
  
    return res.status(202).json(filteredSimpson);
  } catch (error) {
    return res.status(500).end();
  }
})

//exercicio 08
app.post('/simpsons', async (req, res) => {
 try {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();

  if(simpsons.some((simpson) => simpson.id === id)) {
    return res.status(409).json({ message: 'id already exists' })
  };

  const newSimpsons = [ ...simpsons, { id, name } ];

  setSimpsons(newSimpsons);
  return res.status(204).end();
 } catch(error) {
   return res.status(500).end();
 }
})

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});