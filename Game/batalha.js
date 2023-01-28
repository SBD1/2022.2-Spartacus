const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
let op,
  idNPC = 0;
var atributo = 0;

async function menuOpcoes() {
  try {
    const res = await db.query(
      `SELECT idnpc, nomenpc FROM inimigo WHERE idnpc BETWEEN 4 AND 8 ORDER BY idnpc`
    );
    res.rows.map(({ idnpc, nomenpc }) =>
      console.log(`${Number(idnpc) - 3}. ${nomenpc}`)
    );
  } catch (err) {
    console.log(err);
  }
}

async function printDescricao(idNPC) {
  try {
    const res = await db.query(
      `SELECT descricao FROM inimigo WHERE idnpc=${idNPC + 3}`
    );
    console.log(res.rows[0].descricao);
  } catch (err) {
    console.log(err);
  }
}

async function calculaDamage(dano, def) {
  return dano - def;
}

async function batalha(
  vida_total,
  dano_total,
  defesaGuerreiro,
  vidaNPC,
  danoNPC,
  nomeNPC,
  idNPC,
  idGuerreiro
) {
  while (vidaNPC > 0 && vida_total > 0) {
    // ataque do guerreiro
    var damage = await calculaDamage(dano_total, 0);
    vidaNPC -= damage;
    console.log("Você causou " + damage + " de dano a " + nomeNPC + ".");
    console.log("Vida " + nomeNPC + ": " + vidaNPC);

    // ataque do inimigo
    damage = await calculaDamage(danoNPC, defesaGuerreiro);
    vida_total -= damage;
    console.log(nomeNPC + " causou " + damage + " de dano em você!");
    console.log("Vida Guerreiro: " + vida_total);
  }

  if (vidaNPC <= 0) {
    try {
      const res = await db.query(
        `SELECT dinheiro, respeito FROM guerreiro WHERE idguerreiro = ${idGuerreiro}`
      );
      var dinheiro = Number(res.rows[0].dinheiro);
      var respeito = Number(res.rows[0].respeito);
      const res1 = await db.query(
        `SELECT qtdrespeitobat, qtddinheirobat FROM batalha WHERE idinimigo=${
          idNPC + 3
        }`
      );
      var qtdRespeito = Number(res1.rows[0].qtdrespeitobat);
      var qtdDinheiro = Number(res1.rows[0].qtddinheirobat);
      const newDinheiro = dinheiro + qtdDinheiro;
      const newRespeito = respeito + qtdRespeito;

      await db.query(
        `UPDATE guerreiro SET dinheiro = ${newDinheiro}, respeito = ${newRespeito} WHERE idguerreiro=${idGuerreiro}`
      );
    } catch (err) {
      console.log(err);
    }
    await db.query(
      `UPDATE guerreiro SET vida = ${vida_total} WHERE idguerreiro=${idGuerreiro}`
    );
    console.log(
      "Você ganhou a batalha! \nDinheiro ganho: " +
        qtdDinheiro +
        "\nRespeito ganho: " +
        qtdRespeito
    );
  } else {
    console.log(nomeNPC + " ganhou a batalha!");
  }
}

async function getAtributos(idGuerreiro, idNPC) {
  var dano_total = 0,
    vida_total = 0,
    idItem = 0;
  // Pegando os atributos da vida, defesa e forca do guerreiro
  try {
    const res = await db.query(
      `SELECT vida, defesa, forca FROM guerreiro WHERE idguerreiro=${idGuerreiro}`
    );
    var vidaGuerreiro = Number(res.rows[0].vida);
    var defesaGuerreiro = Number(res.rows[0].defesa);
    var forcaGuerreiro = Number(res.rows[0].forca);
    dano_total = forcaGuerreiro;
    vida_total = vidaGuerreiro;
  } catch (err) {
    console.log(err);
  }

  // Inserindo instancia de inimigo e pegando id da instancia.
  try {
    await db.query(
      `INSERT INTO instancia_de_inimigo (idinimigo, idguerreiro) VALUES (${
        idNPC + 3
      }, ${idGuerreiro})`
    );
    const res = await db.query(
      `SELECT idinstancia FROM instancia_de_inimigo WHERE idguerreiro=${idGuerreiro}`
    );
    var idInstInimigo = Number(res.rows[0].idinstancia);
  } catch (err) {
    console.log(err);
  }

  // Pegando os atributos da vida, dano e nome do NPC
  try {
    const res = await db.query(
      `SELECT vida, dano, nomenpc FROM inimigo WHERE idnpc=${idNPC + 3}`
    );
    var vidaNPC = Number(res.rows[0].vida);
    var danoNPC = Number(res.rows[0].dano);
    var nomeNPC = res.rows[0].nomenpc;
  } catch (err) {
    console.log(err);
  }

  // Pegando o ID do Item que o guerreiro está usando na mochila
  try {
    const res = await db.query(`SELECT IT.iditem
                                    FROM instancia_de_item IT
                                    INNER JOIN item I ON I.iditem = IT.iditem
                                    INNER JOIN mochila MO ON MO.idinstancia = IT.idinstancia
                                    WHERE IT.idguerreiro = ${idGuerreiro}`);
    idItem = Number(res.rows[0].iditem);
  } catch (err) {
    console.log(err);
  }

  // Verificação se é uma arma ou armadura
  if (idItem >= 1 && idItem <= 20) {
    // Pegando a potencia da Arma que o guerreiro está usando na mochila
    try {
      const res = await db.query(`SELECT AR.potencia
                                        FROM instancia_de_item IT
                                        INNER JOIN item I ON I.iditem = IT.iditem
                                        INNER JOIN mochila MO ON MO.idinstancia = IT.idinstancia
                                        INNER JOIN arma AR ON AR.iditem = I.iditem
                                        WHERE IT.idguerreiro = ${idGuerreiro}`);
      var potArma = Number(res.rows[0].potencia);
      dano_total += potArma;
      console.log("Dano Total: " + dano_total);
    } catch (err) {
      console.log(err);
    }
  } else if (idItem >= 36 && idItem <= 40) {
    // Pegando a resistencia da Armadura que o guerreiro está usando na mochila

    try {
      const res = await db.query(`SELECT AM.resistencia
                                        FROM instancia_de_item IT
                                        INNER JOIN item i ON I.iditem = IT.iditem
                                        INNER JOIN mochila MO ON MO.idinstancia = IT.idinstancia
                                        INNER JOIN armadura AM ON AM.iditem = I.iditem
                                        WHERE IT.idguerreiro = ${idGuerreiro}`);
      var resArmadura = Number(res.rows[0].resistencia);
      vida_total += resArmadura;
      console.log("Vida Total: " + vida_total);
    } catch (err) {
      console.log(err);
    }
  }

  // Inserindo instancia de batalha e pegando idBatalha
  try {
    const res = await db.query(
      `SELECT idbatalha FROM batalha WHERE idinimigo=${idNPC + 3}`
    );
    var idBatalha = Number(res.rows[0].idbatalha);
    await db.query(`INSERT INTO instancia_de_batalha (idbatalha, idinstinimigo, idguerreiro) VALUES
                                    (${idBatalha}, ${idInstInimigo}, ${idGuerreiro})`);
  } catch (err) {
    console.log(err);
  }

  await batalha(
    vida_total,
    dano_total,
    defesaGuerreiro,
    vidaNPC,
    danoNPC,
    nomeNPC,
    idNPC,
    idGuerreiro
  );
}

async function main_batalhando(idGuerreiro) {
    console.clear();
    await menuOpcoes();
    idNPC = Number(entrada("Selecione o inimigo que deseja batalhar: "));
    if (idNPC >= 1 && idNPC <= 6) {
        await printDescricao(idNPC);
        await getAtributos(idGuerreiro, idNPC);
    } else {
        console.log("Opção Inválida!");
    }
}

module.exports = { main_batalhando };
