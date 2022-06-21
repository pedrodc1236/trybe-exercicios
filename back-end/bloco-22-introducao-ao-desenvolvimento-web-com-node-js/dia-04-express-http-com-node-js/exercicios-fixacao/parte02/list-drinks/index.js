const express = require('express');
const bodyParser = require('body-parser');
const { restart } = require('nodemon');
const res = require('express/lib/response');

const app = express();
app.use(bodyParser.json());

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// para fixar 01
app.get('/drinks', (_req, res) => {
  res.json(drinks.sort( (a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  }))
});

// para fixar 03
app.get('/drinks/search', (req, res) => {
  const { name, minPrice } = req.query;
  const filteredDrinks = drinks.filter((drink) => drink.name.includes(name) && drink.price >= Number(minPrice))

  res.status(200).json(filteredDrinks);
});

// para fixar 02
app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === Number(id));

  if(!drink) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(drink);
});

// para fixar 04
app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink adicionado com sucesso!' });
});

//para fixar 05
app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((d) => d.id === Number(id));

  if(drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

//para fixar 06
app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === Number(id));

  if(drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks.slice(drinkIndex, 1);

  res.status(204).end();
});

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001')
})