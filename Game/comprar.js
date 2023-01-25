const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
var idGuerreiro = 1, dinheiro = 0, valor = 0, nomeitem = 0, atributo = 0, qtdpoc = 0;

async function menuPocoes() {
  try {
    const res = await db.query(`SELECT iditem, valoritem, tipopoc, qtdpoc FROM poção WHERE quantidade > 0 ORDER BY iditem`)
    const imprime = res.rows.map(({ iditem, valoritem, tipopoc, qtdpoc }) => ( console.log(`${Number(iditem) - 20 }. ${tipopoc} | Quantidade: ${qtdpoc} | Preço: $${valoritem},00`) ));

  } catch (err) {
    console.log(err)
  }
}

async function compraPocao(idGuerreiro) {
  console.clear();
  console.log("Estas são nossas poções disponíveis:\n")

  await menuPocoes();
  const op = Number(entrada("\nInsira o número da poção que deseja comprar: "));

  console.clear();
  if (op >= 1 && op <= 15) {
    const iditem = Number(op + 20);

    try {
      const res = await db.query(`SELECT tipopoc, valoritem, qtdpoc FROM poção WHERE iditem = ${iditem}`);
      valor = Number(res.rows[0].valoritem);
      nomeitem = res.rows[0].tipopoc;
      qtdpoc = res.rows[0].qtdpoc;

      if (nomeitem.includes('Força')) {
        atributo = 'forca';
      } else if (nomeitem.includes('Defesa')) {
        atributo = 'defesa';
      } else if (nomeitem.includes('Habilidade')) {
        atributo = 'habilidade';
      } else if (nomeitem.includes('Vida')) {
        atributo = 'vida';
      } else if (nomeitem.includes('Respeito')) {
        atributo = 'respeito';
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
        const res = await db.query(`UPDATE guerreiro SET dinheiro=${newdinheiro}, ${atributo}= ${atributo} + ${qtdpoc} WHERE idguerreiro=${idGuerreiro}`);
    
      } catch (err) {
        console.log(err)
      }

      try {
        const res = await db.query(`UPDATE poção SET quantidade=quantidade-1 WHERE iditem=${iditem}`);
    
      } catch (err) {
        console.log(err)
      }

      console.log(`Parabéns! Você acaba de comprar ${nomeitem} e ganhou +${qtdpoc} deste atributo!\n`)
      
    } else {
      console.log("Você não tem dinheiro suficiente!\n");
    }

  } else {
    console.log("Opção inválida!\n");
  }

}

/* -------------------------------------------------------------------------------------------- */

async function menuArmas() {
  try {
    const res = await db.query(`SELECT iditem, valoritem, tipoarma, potencia FROM arma WHERE quantidade > 0 ORDER BY iditem`)
    const imprime = res.rows.map(({ iditem, valoritem, tipoarma, potencia }) => ( console.log(`${iditem}. ${tipoarma} | Dano: ${potencia} | Preço: $${valoritem},00`) ));

  } catch (err) {
    console.log(err)
  }
}

async function compraArma(idGuerreiro) {
  console.clear();
  console.log("Estas são nossas armas disponíveis:\n")

  await menuArmas();
  const op = Number(entrada("\nInsira o número da arma que deseja comprar: "));

  console.clear();
  if (op >= 1 && op <= 20) {
    const iditem = Number(op);

    try {
      const res = await db.query(`SELECT tipoarma, valoritem FROM arma WHERE iditem = ${iditem}`);
      valor = Number(res.rows[0].valoritem);
      nomeitem = res.rows[0].tipoarma;
  
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
        const res = await db.query(`UPDATE guerreiro SET dinheiro=${newdinheiro} WHERE idguerreiro=${idGuerreiro}`);
    
      } catch (err) {
        console.log(err)
      }

      // try {
      //   // A TABELA DE ITEM NÃO ESTÁ GRAVANDO OS IDS QUE FORAM GERADOS A PARTIR DOS FILHOS
      //   const res = await db.query(`INSERT INTO instancia_de_item (iditem, idguerreiro) VALUES
      //   (${iditem}, ${idGuerreiro})`);
    
      // } catch (err) {
      //   console.log(err)
      // }

      try {
        const res = await db.query(`UPDATE arma SET quantidade=quantidade-1 WHERE iditem=${iditem}`);
    
      } catch (err) {
        console.log(err)
      }

      console.log(`Parabéns! Você acabou de comprar ${nomeitem}!\n`)
      
    } else {
      console.log("Você não tem dinheiro suficiente!\n");
    }

  } else {
    console.log("Opção inválida!\n");
  }

}

/* -------------------------------------------------------------------------------------------- */

async function menuArmaduras() {
  try {
    const res = await db.query(`SELECT iditem, valoritem, tipoarmadura, resistencia FROM armadura WHERE quantidade > 0 ORDER BY iditem`)
    const imprime = res.rows.map(({ iditem, valoritem, tipoarmadura, resistencia }) => ( console.log(`${Number(iditem) - 35 }. ${tipoarmadura} | Resistência: ${resistencia} | Preço: $${valoritem},00`) ));

  } catch (err) {
    console.log(err)
  }
}

compraPocao(idGuerreiro);