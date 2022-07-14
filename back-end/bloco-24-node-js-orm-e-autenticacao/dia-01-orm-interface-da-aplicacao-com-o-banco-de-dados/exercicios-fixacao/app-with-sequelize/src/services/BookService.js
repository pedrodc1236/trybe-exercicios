const { Book } = require('../models');

const getAll = async () => {
  const listBooks = await Book.findAll();

  return listBooks;
}

const getById = async (id) => {
  const books = await Book.findByPk(id);

  if (!books) return { code: 404, message: "Book not found" }

  return { code: 200, books };
}

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  
  return newBook;
}

const update = async (id, newBook) => {
  const [updateBook] = await Book.update(newBook, { where: { id } });

  return updateBook;
}

const remove = async (id) => {
  const removeBook = await Book.destroy({ where: { id } })
  console.log(removeBook);

  return removeBook;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
