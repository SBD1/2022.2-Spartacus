const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
let op;
const lugares = require("./locais");
const treinar = require("./treino");
const batalha = require("./batalha");

// async function updateIdLugar(idLugar, idGuerreiro) {
//   try {
//     const res = await db.query(`UPDATE guerreiro SET idlugar=${idLugar} WHERE idguerreiro=${idGuerreiro}`)

//   } catch (err) {
//     console.log(err)
//   }
// }

async function Trezentes(idGuerreiro) {
  console.clear();
  console.log("Você está em Trezentes - Loja de equipamentos!\n");

  // updateIdLugar(Number(4), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=4 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.Trezentes();

    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //centro
        await CentroE(idGuerreiro);
        break;

      case 2: //centroT
        await CentroTreinamento(idGuerreiro);
        break;

      case 3:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 3);
}

async function Alquimia(idGuerreiro) {
  console.clear();
  console.log("Você está em Alquimia - Loja de poções!\n");

  // updateIdLugar(Number(4), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=4 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.Alquimia();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: // centroB
        await CentroE(idGuerreiro);
        break;

      case 2: //cetroE
        await OesteE(idGuerreiro);
        break;

      case 3: //oeste
        await CentroBatalha(idGuerreiro);
        break;

      case 4:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 4);
}

async function SaidaE(idGuerreiro) {
  console.clear();
  console.log("Você está em Saída de Esparta!\n");

  // updateIdLugar(Number(8), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=8 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.SaidaE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1:
        await CentroE(idGuerreiro);
        break;

      case 2:
        await FlorestaBrightwood(idGuerreiro);
        break;

      case 3: // lago
        await CentroBatalha(idGuerreiro);
        break;

      case 4: // florestaB
        await LagoPrespa(idGuerreiro);
        break;

      case 5:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 3);
}

async function EntradaE(idGuerreiro) {
  console.clear();
  console.log("Você está em Entrada de Esparta!\n");

  // updateIdLugar(Number(3), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=3 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.EntradaE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: // centro
        await CentroE(idGuerreiro);
        break;

      case 2: // florestaA
        await FlorestaAmazonica(idGuerreiro);
        break;

      case 3:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 3);
}

async function CentroBatalha(idGuerreiro) {
  console.clear();
  console.log("Você está em Centro de Batalha!\n");

  // updateIdLugar(Number(9), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=9 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }
  await batalha.batalhando();
  do {
    lugares.CentroBatalha();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        await SaidaE(idGuerreiro);
        break;

      case 2: // alquimia
        await Alquimia(idGuerreiro);
        break;

      case 3:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 3);
}

async function CentroTreinamento(idGuerreiro) {
  console.clear();
  console.log("Você está em Centro de Treinamento!\n");
  // pagar pra treinar
  // updateIdLugar(Number(6), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=6 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }
  //chamando treino
  await treinar.treinando();
  do {
    lugares.CentroTreinamento();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //trezentes
        await Trezentes(idGuerreiro);
        break;

      case 2: // leste
        await LesteE(idGuerreiro);
        break;

      case 3:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 3);
}

async function OesteE(idGuerreiro) {
  console.clear();
  console.log("Você está em Oeste de Esparta!\n");

  // updateIdLugar(Number(5), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=5 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.OesteE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //centroT
        await Alquimia(idGuerreiro);
        break;

      case 2:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 2);
}

async function LesteE(idGuerreiro) {
  console.clear();
  console.log("Você está em Leste de Esparta!\n");

  // updateIdLugar(Number(7), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=7 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.LesteE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //alquimia
        await CentroTreinamento(idGuerreiro);
        break;

      case 2:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 2);
}

async function FlorestaBrightwood(idGuerreiro) {
  console.clear();
  console.log("Você está em Floresta Brightwood!\n");

  // updateIdLugar(Number(10), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=10 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.FlorestaBrightwood();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        await SaidaE(idGuerreiro);
        break;

      case 2: //lago
        await LagoPrespa(idGuerreiro);
        break;

      case 3:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 3);
}

async function LagoPrespa(idGuerreiro) {
  console.clear();
  console.log("Você está em Lago Prespa!\n");

  // updateIdLugar(Number(11), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=11 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.LagoPrespa();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        await SaidaE(idGuerreiro);
        break;

      case 2: //florestaB
        await FlorestaBrightwood(idGuerreiro);
        break;

      case 3: //everleste
        await Everleste(idGuerreiro);
        break;

      case 4:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 4);
}

async function Everleste(idGuerreiro) {
  console.clear();
  console.log("Você está em Everleste!\n");

  // updateIdLugar(Number(12), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=12 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.Everleste();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //lago
        await LagoPrespa(idGuerreiro);
        break;

      case 2:
        process.exit();
        break;
      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 2);
}

async function CentroE(idGuerreiro) {
  console.clear();
  console.log("Você está em Centro de Esparta!\n");

  // updateIdLugar(Number(4), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=4 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.CentroE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: // calquimia
        await Trezentes(idGuerreiro);
        break;

      case 2: //trezentes
        await Alquimia(idGuerreiro);
        break;

      case 3: // saida
        await SaidaE(idGuerreiro);
        break;

      case 4: // entrada
        await EntradaE(idGuerreiro);
        break;

      case 5:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 5);
}

async function FlorestaAmazonica(idGuerreiro) {
  console.clear();
  console.log("Você está em Floresta Amazônica!\n");

  // updateIdLugar(Number(2), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=2 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.FlorestaAmazonica();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        await EntradaE(idGuerreiro);
        break;

      case 2: //lago
        await CavernaMelissanthi(idGuerreiro);
        break;

      case 3:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 3);
}

async function CavernaMelissanthi(idGuerreiro) {
  console.clear();
  console.log("Você está em Caverna de Melissanthi!\n");

  // updateIdLugar(Number(1), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=1 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  do {
    lugares.CavernaMelissanthi();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //florestaA
        await FlorestaAmazonica(idGuerreiro);
        break;

      case 2:
        process.exit();
        break;

      default: // opcao invalida
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 2);
}

module.exports = {
  Trezentes,
  Alquimia,
  SaidaE,
  EntradaE,
  CentroBatalha,
  CentroTreinamento,
  OesteE,
  FlorestaBrightwood,
  LagoPrespa,
  Everleste,
  CentroE,
  LesteE,
  FlorestaAmazonica,
  CavernaMelissanthi,
};
