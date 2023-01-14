const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
let op;
const lugares = require("./locais");

async function updateIdLugar(idLugar, idGuerreiro) {
  console.log("Estou dentro da função")
  try {
    const res = await db.query(`UPDATE guerreiro SET idlugar=${idLugar} WHERE idguerreiro=${idGuerreiro}`)

  } catch (err) {
    console.log(err)
  }
}

async function Trezentes(idGuerreiro) {
  console.clear();
  console.log("Você está em Trezentes - Loja de equipamentos!\n");

  updateIdLugar(Number(4), Number(idGuerreiro));

  do {
    lugares.Trezentes();

    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //centro
        CentroE(idGuerreiro);
        break;

      case 2: //centroT
        CentroTreinamento(idGuerreiro);
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

  updateIdLugar(Number(4), Number(idGuerreiro));

  do {
    lugares.Alquimia();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: // centroB
        CentroE(idGuerreiro);
        break;

      case 2: //cetroE
        OesteE(idGuerreiro);
        break;

      case 3: //oeste
        CentroBatalha(idGuerreiro);
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
  
  updateIdLugar(Number(8), Number(idGuerreiro));

  do {
    lugares.SaidaE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1:
        CentroE(idGuerreiro);
        break;

      case 2: 
        FlorestaBrightwood(idGuerreiro);
        break;

      case 3: // lago
        CentroBatalha(idGuerreiro);
        break;

      case 4: // florestaB
        LagoPrespa(idGuerreiro);
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

  updateIdLugar(Number(3), Number(idGuerreiro));
  
  do {
    lugares.EntradaE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: // centro
        CentroE(idGuerreiro);
        break;

      case 2: // florestaA
        FlorestaAmazonica(idGuerreiro);
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

  updateIdLugar(Number(9), Number(idGuerreiro));
  
  do {
    lugares.CentroBatalha();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        SaidaE(idGuerreiro);
        break;

      case 2: // alquimia
        Alquimia(idGuerreiro);
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
  
  updateIdLugar(Number(6), Number(idGuerreiro));

  do {
    lugares.CentroTreinamento();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //trezentes
        Trezentes(idGuerreiro);
        break;

      case 2: // leste
        LesteE(idGuerreiro);
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

  updateIdLugar(Number(5), Number(idGuerreiro));
  
  do {
    lugares.OesteE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //centroT
        Alquimia(idGuerreiro);
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

  updateIdLugar(Number(7), Number(idGuerreiro));
  
  do {
    lugares.LesteE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //alquimia
        CentroTreinamento(idGuerreiro);
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

  updateIdLugar(Number(10), Number(idGuerreiro));

  do {
    lugares.FlorestaBrightwood();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        SaidaE(idGuerreiro);
        break;
    
      case 2: //lago
        LagoPrespa(idGuerreiro);
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

  updateIdLugar(Number(11), Number(idGuerreiro));
  
  do {
    lugares.LagoPrespa();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        SaidaE(idGuerreiro);
        break;

      case 2: //florestaB
        FlorestaBrightwood(idGuerreiro);
        break;

      case 3: //everleste
        Everleste(idGuerreiro);
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

  updateIdLugar(Number(12), Number(idGuerreiro));
  
  do {
    lugares.Everleste();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //lago
        LagoPrespa(idGuerreiro);
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
  console.clear()
  console.log("Você está em Centro de Esparta!\n");

  updateIdLugar(Number(4), Number(idGuerreiro));
  
  do {
    lugares.CentroE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: // calquimia
        Trezentes(idGuerreiro);
        break;

      case 2: //trezentes
        Alquimia(idGuerreiro);
        break;

      case 3: // saida
        SaidaE(idGuerreiro);
        break;

      case 4: // entrada
        EntradaE(idGuerreiro);
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

  updateIdLugar(Number(2), Number(idGuerreiro));
  
  do {
    lugares.FlorestaAmazonica();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        EntradaE(idGuerreiro);
        break;

      case 2: //lago
        CavernaMelissanthi(idGuerreiro);
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

  updateIdLugar(Number(1), Number(idGuerreiro));
  
  do {
    lugares.Everleste();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //florestaA
        FlorestaAmazonica(idGuerreiro);
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
