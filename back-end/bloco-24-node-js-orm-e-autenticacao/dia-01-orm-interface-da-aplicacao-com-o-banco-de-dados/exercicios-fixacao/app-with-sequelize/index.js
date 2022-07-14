const express = require('express');

const userController = require('./src/controllers/userController');
const BookController = require('./src/controllers/BookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', userController);

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.getById);

app.post('/books', BookController.create);

app.put('/books/:id', BookController.update);

app.delete('/books/:id', BookController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));