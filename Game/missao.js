const db = require("./database");

async function imprime_missao(idMissao) {
  try {
    res = await db.query(`SELECT nomemissao, descricaomissao, objetivo, recompensa FROM missao WHERE idmissao=${idMissao}`);
    console.log(`Missão: ${res.rows[0].nomemissao}`)
    console.log(`Descrição: ${res.rows[0].descricaomissao}`)
    console.log(`Objetivo: ${res.rows[0].objetivo}`)
    console.log(`Recompensa: $${res.rows[0].recompensa},00\n`)
  } catch (err) {
    console.log(err);
  }
}

async function missao01(idGuerreiro) {
  try {
    res = await db.query(`SELECT * FROM instancia_de_item WHERE (idguerreiro=${idGuerreiro}) AND (iditem BETWEEN 1 AND 20)`);

    if (res.rows.length == 0) {
      console.log(`A primeira a gente nunca esquece! Você completou essa missão e ganhou uma recompensa por isso.`)
      await imprime_missao(1);
      
      try {
        res = await db.query(`INSERT INTO instancia_de_missao (idmissao, idguerreiro) VALUES (1, ${idGuerreiro})`);
    
      } catch (err) {
        console.log(err);
      }

      try {
        res = await db.query(`UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`);
    
      } catch (err) {
        console.log(err);
      }

    }

  } catch (err) {
    console.log(err);
  }
}

async function missao02(idGuerreiro) {
  try {
    res = await db.query(`SELECT * FROM instancia_de_item WHERE (idguerreiro=${idGuerreiro}) AND (iditem BETWEEN 36 AND 40)`);

    if (res.rows.length == 0) {
      console.log(`Enfim protegido! Você completou essa missão e ganhou uma recompensa por isso.`)
      await imprime_missao(2);
      
      try {
        res = await db.query(`INSERT INTO instancia_de_missao (idmissao, idguerreiro) VALUES (2, ${idGuerreiro})`);
    
      } catch (err) {
        console.log(err);
      }

      try {
        res = await db.query(`UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`);
    
      } catch (err) {
        console.log(err);
      }

    }

  } catch (err) {
    console.log(err);
  }
}

module.exports = { missao01, missao02 };
