const db = require("./database");
const batalha = require("./batalha");
const missoes_batalha = require("./missoes_de_batalha");
const entrada = require("prompt-sync")({ sigint: true });
let op, vida, defesa, forca, nomemissao, nomeNPC, danoNPC, newdinheiro;

async function imprime_missao(idMissao) {
  try {
    res = await db.query(
      `SELECT nomemissao, descricaomissao, objetivo, recompensa FROM missao WHERE idmissao=${idMissao}`
    );
    console.log(`Missão: ${res.rows[0].nomemissao}`);
    console.log(`Descrição: ${res.rows[0].descricaomissao}`);
    console.log(`Objetivo: ${res.rows[0].objetivo}`);
    console.log(`Recompensa: $${res.rows[0].recompensa},00\n`);
  } catch (err) {
    console.log(err);
  }
}

async function missao01(idGuerreiro) {
  try {
    res = await db.query(
      `SELECT * FROM instancia_de_item WHERE (idguerreiro=${idGuerreiro}) AND (iditem BETWEEN 1 AND 20)`
    );

    if (res.rows.length == 0) {
      console.log(
        `A primeira a gente nunca esquece! Você completou essa missão e ganhou uma recompensa por isso.`
      );
      await imprime_missao(1);

      try {
        res = await db.query(
          `INSERT INTO instancia_de_missao (idmissao, idguerreiro) VALUES (1, ${idGuerreiro})`
        );
      } catch (err) {
        console.log(err);
      }

      try {
        res = await db.query(
          `UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`
        );
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
    res = await db.query(
      `SELECT * FROM instancia_de_item WHERE (idguerreiro=${idGuerreiro}) AND (iditem BETWEEN 36 AND 40)`
    );

    if (res.rows.length == 0) {
      console.log(
        `Enfim protegido! Você completou essa missão e ganhou uma recompensa por isso.`
      );
      await imprime_missao(2);

      try {
        res = await db.query(
          `INSERT INTO instancia_de_missao (idmissao, idguerreiro) VALUES (2, ${idGuerreiro})`
        );
      } catch (err) {
        console.log(err);
      }

      try {
        res = await db.query(
          `UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`
        );
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function missao010(idGuerreiro) {
  try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idinimigo = 3`
    );
    if (res.rows.length == 0) {
      //await imprime_missao(10);
      await missoes_batalha.getAtributosMissoes(idGuerreiro, 3, 10);
      try {
        res = await db.query(
          `UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`
        );
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function missao014(idGuerreiro) {
  try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idinimigo = 14`
    );
    if (res.rows.length == 0) {
      await imprime_missao(14);
      // idGuerreiro idInimigo e idMissao
      await missoes_batalha.getAtributosMissoes(idGuerreiro, 21, 14);
      try {
        res = await db.query(
          `UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`
        );
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function missao015(idGuerreiro) {
  try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idinimigo = 22`
    );
    if (res.rows.length == 0) {
      //await imprime_missao(19);
      // idGuerreiro idInimigo e idMissao
      await missoes_batalha.getAtributosMissoes(idGuerreiro, 22, 15);
      try {
        res = await db.query(
          `UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`
        );
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function missao016(idGuerreiro) {
  try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idinimigo = 23`
    );
    if (res.rows.length == 0) {
      //await imprime_missao(19);
      // idGuerreiro idInimigo e idMissao
      await missoes_batalha.getAtributosMissoes(idGuerreiro, 23, 16);
      try {
        res = await db.query(
          `UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`
        );
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function missao017(idGuerreiro) {
  try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idinimigo = 24`
    );
    if (res.rows.length == 0) {
      //await imprime_missao(19);
      // idGuerreiro idInimigo e idMissao
      await missoes_batalha.getAtributosMissoes(idGuerreiro, 24, 17);
      try {
        res = await db.query(
          `UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`
        );
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function missao018(idGuerreiro) {
  try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idinimigo = 25`
    );
    if (res.rows.length == 0) {
      //await imprime_missao(19);
      // idGuerreiro idInimigo e idMissao
      await missoes_batalha.getAtributosMissoes(idGuerreiro, 25, 18);
      try {
        res = await db.query(
          `UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`
        );
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function missao019(idGuerreiro) {
  try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idinimigo = 26`
    );
    if (res.rows.length == 0) {
      //await imprime_missao(19);
      // idGuerreiro idInimigo e idMissao
      await missoes_batalha.getAtributosMissoes(idGuerreiro, 26, 19);
      try {
        res = await db.query(
          `UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`
        );
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function missao020(idGuerreiro) {
  try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idinimigo = 27`
    );
    if (res.rows.length == 0) {
      //await imprime_missao(19);
      // idGuerreiro idInimigo e idMissao
      await missoes_batalha.getAtributosMissoes(idGuerreiro, 27, 20);
      try {
        res = await db.query(
          `UPDATE guerreiro SET dinheiro=dinheiro+20 WHERE idguerreiro=${idGuerreiro}`
        );
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  imprime_missao,
  missao01,
  missao02,
  missao010,
  missao014,
  missao015,
  missao016,
  missao017,
  missao018,
  missao019,
  missao020,
};
