const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
var dinheiro = 0, valor = 0, tipotreino = 0, atributo = 0, melhoria = 0;

async function menuTreino() {
  try {
    const res = await db.query(`SELECT * FROM treino ORDER BY idtreino`)
    const imprime = res.rows.map(({ idtreino, tipotreino, valortreino, melhoriatreino }) => ( console.log(`${idtreino}. ${tipotreino} | Ganho: ${melhoriatreino} | Preço: $${valortreino},00`) ));

  } catch (err) {
    console.log(err)
  }
}

async function treinar(idGuerreiro) {
  console.clear();
  console.log("Estes são os tipos de treino:\n")

  await menuTreino();
  const op = Number(entrada("\nInsira o número do treino que deseja fazer: "));

  console.clear();
  if (op >= 1 && op <= 9) {
    const idtreino = Number(op);

    try {
      const res = await db.query(`SELECT tipotreino, valortreino, melhoriatreino FROM treino WHERE idtreino = ${idtreino}`);
      valor = Number(res.rows[0].valortreino);
      tipotreino = res.rows[0].tipotreino;
      melhoria = res.rows[0].melhoriatreino;

      if (tipotreino.includes('Força')) {
        atributo = 'forca';
      } else if (tipotreino.includes('Defesa')) {
        atributo = 'defesa';
      } else if (tipotreino.includes('Habilidade')) {
        atributo = 'habilidade';
      }
  
    } catch (err) {
      console.log(err)
    }
    
    try {
      const res = await db.query(`SELECT dinheiro FROM guerreiro WHERE idguerreiro = ${idGuerreiro}`);
      dinheiro = Number(res.rows[0].dinheiro);
  
    } catch (err) {
      console.log(err)
    }

    if (dinheiro >= valor) {
      const newdinheiro = dinheiro - valor;

      try {
        const res = await db.query(`UPDATE guerreiro SET dinheiro=${newdinheiro}, ${atributo}= ${atributo} + ${melhoria} WHERE idguerreiro=${idGuerreiro}`);
    
      } catch (err) {
        console.log(err)
      }

      try {
        const res = await db.query(`INSERT INTO instancia_de_treino (idtreino, idguerreiro) VALUES
        (${idtreino}, ${idGuerreiro})`);
    
      } catch (err) {
        console.log(err)
      }

      console.log(`Ufa, esse treino foi pesado! Parabéns, você acaba de ter ${tipotreino} e ganhou +${melhoria} deste atributo!\n`)
      
    } else {
      console.log("Você não tem dinheiro suficiente!\n");
    }

  } else {
    console.log("Opção inválida!\n");
  }

}

module.exports = { treinar };