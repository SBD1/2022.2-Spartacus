const { Client } = require('pg');

require('dotenv').config()

const db = new Client({
      host : process.env.HOST,
      port : process.env.PORT,
      user : process.env.USER_DB,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
});

db.connect();
module.exports = db;