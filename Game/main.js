const db = require("./database");
const fs = require('fs');

var ddl = fs.readFileSync('DDL.sql').toString();
var dml = fs.readFileSync('DML.sql').toString(); 

const createTables = async () => {
  db
  .query(ddl)
  .then(res => console.log('TABELAS CRIADAS!'))
  .catch(e => console.error(e.stack))
}

const populateTables = async () => {
  db
  .query(dml)
  .then(res => console.log('TABELAS POPULADAS!'))
  .catch(e => console.error(e.stack))
}