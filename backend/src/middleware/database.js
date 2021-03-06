const mysql = require('mysql2');

const dbMiddleware = (req, _res, next) => {
  const db = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
  });

  db.connect((err) => {
    if (err) throw err;
  });
  req.db = db;
  next();
};

module.exports = {
  dbMiddleware,
};