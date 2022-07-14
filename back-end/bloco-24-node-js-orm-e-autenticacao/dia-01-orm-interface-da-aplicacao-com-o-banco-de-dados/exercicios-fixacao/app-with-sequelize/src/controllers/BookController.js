const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const booksList = await BookService.getAll();

  res.status(200).json(booksList);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const books = await BookService.getById(id);

  if (books.message) return res.status(books.code)
    .json({ message: books.message });

  res.status(books.code).json(books.books);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BookService.create({ title, author, pageQuantity });

  res.status(201).json(newBook);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const updateBook = await BookService.update(id, body);

  if(!updateBook) return res.status(404)
    .json({ message: 'Book not found' });
  
  res.status(200).json({ message: 'Book updated!' });
}

const remove = async (req, res) => {
  const { id } = req.params;

  const removeBook = await BookService.remove(id);

  if(!removeBook) return res.status(404)
    .json({ message: 'Book not found' });
  
  res.status(200).json({ message: 'Book removed!' });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};