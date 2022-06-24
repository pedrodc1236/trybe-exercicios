const connection = require('./connection');

const Author = require('./Author');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id
});

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'

  const [books] = await connection.execute(query, [authorId]);

  return books.map(serialize);
}

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books; '
  );
  return books.map(serialize);
};

const findById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?;'
  const [book] = await connection.execute(query, [id]);

  if (book.length === 0) return null;

  return book.map(serialize);
}

const isValid = async (title, author_id) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!author_id || !(await Author.findById(author_id))) return false;

  return true;
}

const create = async (title, authorId) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)';
  connection.execute(query, [title, authorId]);
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create
};