const db = require("./database");

async function calculaDamageMissoes(dano, def) {
    return dano - def;
}

async function batalha_missoes(
    vida_total,
    dano_total,
    defesaGuerreiro,
    vidaNPC,
    danoNPC,
    nomeNPC,
    idGuerreiro,
    idMissao,
    idNPC
) {
    while (vidaNPC > 0 && vida_total > 0) {
      // ataque do guerreiro
      var damage = await calculaDamageMissoes(dano_total, 0);
      vidaNPC -= damage;
      console.log("Você causou " + damage + " de dano a " + nomeNPC + ".");
      console.log("Vida " + nomeNPC + ": " + vidaNPC);
  
      // ataque do inimigo
      damage = await calculaDamageMissoes(danoNPC, defesaGuerreiro);
      vida_total -= damage;
      console.log(nomeNPC + " causou " + damage + " de dano em você!");
      console.log("Vida Guerreiro: " + vida_total);
    }
  
    if (vidaNPC <= 0) {
        try {
            await db.query(
                `INSERT INTO instancia_de_missao (idmissao, idinimigo, idguerreiro) VALUES (${idMissao}, ${idNPC}, ${idGuerreiro})`
            );
            await db.query(
                `UPDATE guerreiro SET vida = ${vida_total} WHERE idguerreiro=${idGuerreiro}`
            );
        } catch (err) {
            console.log(err); 
        }
        console.log("Pelo visto nenhum inimigo está aos seus pés! Parabéns!");
    } else {
      console.log(nomeNPC + " ganhou a batalha! Missão não completada!");
    }
  }

async function getAtributosMissoes (idGuerreiro, idNPC, idMissao) {

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

    // Inserindo instancia de inimigo
    try {
        await db.query(
        `INSERT INTO instancia_de_inimigo (idinimigo, idguerreiro) VALUES (${
            idNPC
        }, ${idGuerreiro})`
        );
    } catch (err) {
        console.log(err);
    }

    // Pegando os atributos da vida, dano e nome do NPC
    try {
        const res = await db.query(
        `SELECT vida, dano, nomenpc FROM inimigo WHERE idnpc=${idNPC}`
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

    await batalha_missoes(vida_total,
        dano_total,
        defesaGuerreiro,
        vidaNPC,
        danoNPC,
        nomeNPC,
        idGuerreiro, 
        idMissao,
        idNPC
    );
}


module.exports = { getAtributosMissoes };