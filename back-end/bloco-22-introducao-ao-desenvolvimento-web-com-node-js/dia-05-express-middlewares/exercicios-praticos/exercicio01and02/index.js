const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  try {
    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: 'missing fields' })
    }

    token = crypto.randomBytes(8).toString('hex');

    return res.status(200).json({ token: token })
  } catch(err) {
    return res.status(500).end();
  }
});

const authMiddleware = require('./middlewares/authMiddleware');

const validateProductName = require('./middlewares/validateProductName');

const validateInfos = require('./middlewares/validateInfos');

const validateSaleDate = require('./middlewares/validateSaleDate');

const validateWarrantyPeriod = require('./middlewares/validateWarrantyPeriod');

app.use(authMiddleware);

app.post('/sales', 
validateProductName, 
validateInfos, 
validateSaleDate, 
validateWarrantyPeriod, 
(_req, res) => {
  res.status(201).json({ message: 'Venda criada com sucesso!' })
})

app.listen(3001, () => {
  console.log('App ouvindo a porta 3001');
});