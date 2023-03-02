const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'Hoang',
  password: 'Tranhuynam15',
  database: 'Users',
});
