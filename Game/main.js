var db = require("./database");

db.select("idlugar", "nomelugar")
  .table("lugar")
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log(erro);
  });