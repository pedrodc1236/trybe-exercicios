const express = require('express');
const bodyParser = require('body-parser');

const User = require('./models/User');

const app = express();

app.use(bodyParser.json());

app.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!User.isValid(firstName, lastName, email, password)) {
    return res.status(401).json({
      error: true,
      message: 'O campo "password" deve ter pelo menos 6 caracteres'
    })
  }

  const newUser = await User.create(firstName, lastName, email, password);

  return res.status(201).json(newUser);
});

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});