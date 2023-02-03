const db = require("./database");
const batalha = require("./batalha");
const entrada = require("prompt-sync")({ sigint: true });
let op, forca, vida, danoNPC, vidaNPC, nomeNPC, defesa, newDinheiro;

async function missao_caverna(idGuerreiro, idmissao, idnpc) {
  try {
    const res = await db.query(
      `SELECT descricaomissao, nomemissao FROM missao WHERE idmissao=${idmissao}`
    );
    console.log("MISSAO: " + res.rows[0].nomemissao);
    console.log(res.rows[0].descricaomissao);
  } catch (err) {
    console.log(err);
  }
  try {
    const res = await db.query(
      `SELECT vida, forca, defesa, dinheiro FROM guerreiro WHERE idguerreiro=${idGuerreiro}`
    );
    forca = res.rows[0].forca;
    vida = res.rows[0].vida;
    defesa = res.rows[0].defesa;
    newdinheiro = res.rows[0].dinheiro;
  } catch (err) {
    console.log(err);
  }
  try {
    const res = await db.query(
      `SELECT nomenpc,dano, vida FROM inimigo WHERE idnpc=${idnpc}`
    );
    danoNPC = res.rows[0].dano;
    vidaNPC = res.rows[0].vida;
    nomeNPC = res.rows[0].nomenpc;
  } catch (err) {
    console.log(err);
  }
  console.log("Vai tentar encarar essa aberração ?\n1. Sim\n2. Não");
  op = Number(entrada("Insira o número da sua resposta: "));

  if (op == 1) {
    while (vidaNPC > 0 && vida > 0) {
      // ataque do guerreiro
      var damage = await batalha.calculaDamage(forca, 0);
      vidaNPC -= damage;
      console.log("Você causou " + damage + " de dano a " + nomeNPC + ".");
      console.log("Vida " + nomeNPC + ": " + vidaNPC);

      // ataque do inimigo
      damage = await batalha.calculaDamage(danoNPC, defesa);
      vida -= damage;
      console.log(nomeNPC + " causou " + damage + " de dano em você!");
      console.log("Vida Guerreiro: " + vida);
    }
  }
  if (vida > 0) {
    console.log(
      "Voce matou um dos monstrons mais fortes e amendrontador de Esparta!"
    );
    console.log("Parabens! Sua recompensa é 20 moedas!");
    newdinheiro += 20;
    await db.query(
      `UPDATE guerreiro SET dinheiro = ${newdinheiro} WHERE idguerreiro=${idGuerreiro}`
    );
    await db.query(`INSERT INTO instancia_de_missao (idmissao, idinimigo, idguerreiro) VALUES
    (${idmissao}, ${idnpc}, ${idGuerreiro})`);
  } else
    console.log(
      "Você não esta forte suficiente! Ganhe mais força e defesa no Centro de Treinamento."
    );
}

module.exports = missao_caverna;
