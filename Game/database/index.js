require('dotenv').config()

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.HOST,
      port : process.env.PORT,
      user : process.env.USER_DB,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    }
  });

  module.exports = knex;