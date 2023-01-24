const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
var idGuerreiro = 1;
var dinheiro = 0;
var valor = 0;
var nomeitem = 0;

async function menuPocoes() {
  try {
    const res = await db.query(`SELECT iditem, valoritem, tipopoc, qtdpoc FROM poção WHERE quantidade > 0`)
    const imprime = res.rows.map(({ iditem, valoritem, tipopoc, qtdpoc }) => ( console.log(`${Number(iditem) - 20 }. ${tipopoc} | Quantidade: ${qtdpoc} | Preço: $${valoritem},00`) ));

  } catch (err) {
    console.log(err)
  }
}

async function menuArmas() {
  try {
    const res = await db.query(`SELECT iditem, valoritem, tipoarma, potencia FROM arma WHERE quantidade > 0`)
    const imprime = res.rows.map(({ iditem, valoritem, tipoarma, potencia }) => ( console.log(`${iditem}. ${tipoarma} | Dano: ${potencia} | Preço: $${valoritem},00`) ));

  } catch (err) {
    console.log(err)
  }
}

async function menuArmaduras() {
  try {
    const res = await db.query(`SELECT iditem, valoritem, tipoarmadura, resistencia FROM armadura WHERE quantidade > 0`)
    const imprime = res.rows.map(({ iditem, valoritem, tipoarmadura, resistencia }) => ( console.log(`${Number(iditem) - 35 }. ${tipoarmadura} | Resistência: ${resistencia} | Preço: $${valoritem},00`) ));

  } catch (err) {
    console.log(err)
  }
}