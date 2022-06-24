const connection = require('./connection');

const isValid = (firstName, lastName, email, password) => {
  if (!firstName) return false;
  if (!lastName) return false;
  if (!email) return false;
  if (!password || typeof password !== 'string' || password.length < 6) return false;

  return true;
}

const create = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  const [{ insertId: id }] = await connection.execute(query, [firstName, lastName, email, password]);

  return {
    id,
    firstName,
    lastName,
    email,
    password
  }
};

module.exports = {
  isValid,
  create
};