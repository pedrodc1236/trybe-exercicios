const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1753Gabby',
  database: 'users_crud'
});

module.exports = connection;