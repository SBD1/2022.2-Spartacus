//-----------------MISSAO-----------------------------
const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
const contaMissao = 0;
//----------------------------------------------------
async function missao01() {
  try {
    res = await db.query(`SELECT nomemissao FROM missao WHERE idmissao = 1`);
    console.log("MISSÃO: " + res.rows[0].nomemissao + ":");
    res = await db.query(
      `SELECT descricaomissao FROM missao WHERE idmissao = 1`
    );
    console.log(res.rows[0].descricaomissao + "\n");
  } catch (err) {
    console.log(err);
  }
}
module.exports = { missao01 };
