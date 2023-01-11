const entrada = require("prompt-sync")({ sigint: true });
let op;
const lugares = require("./locais");

function Trezentes() {
  console.clear();
  console.log("Você está em Trezentes - Loja de equipamentos!\n");

  do {
    lugares.Trezentes();

    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //centro
        CentroE();
        break;

      case 2: //centroT
        CentroTreinamento();
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

function Alquimia() {
  console.clear();
  console.log("Você está em Alquimia - Loja de poções!\n");

  do {
    lugares.Alquimia();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: // centroB
        CentroE();
        break;

      case 2: //cetroE
        OesteE();
        break;

      case 3: //oeste
        CentroBatalha();
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

function SaidaE() {
  console.clear();
  console.log("Você está em Saída de Esparta!\n");
  
  do {
    lugares.SaidaE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1:
        CentroE();
        break;

      case 2: 
        FlorestaBrightwood();
        break;

      case 3: // lago
        CentroBatalha();
        break;

      case 4: // florestaB
        LagoPrespa();
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

function EntradaE() {
  console.clear();
  console.log("Você está em Entrada de Esparta!\n");
  
  do {
    lugares.EntradaE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: // centro
        CentroE();
        break;

      case 2: // florestaA
        FlorestaAmazonica();
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

function CentroBatalha() {
  console.clear();
  console.log("Você está em Centro de Batalha!\n");
  
  do {
    lugares.CentroBatalha();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        SaidaE();
        break;

      case 2: // alquimia
        Alquimia();
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

function CentroTreinamento() {
  console.clear();
  console.log("Você está em Centro de Treinamento!\n");
  
  do {
    lugares.CentroTreinamento();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //trezentes
        Trezentes();
        break;

      case 2: // leste
        LesteE();
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

function OesteE() {
  console.clear();
  console.log("Você está em Oeste de Esparta!\n");
  
  do {
    lugares.OesteE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //centroT
        Alquimia();
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

function LesteE() {
  console.clear();
  console.log("Você está em Leste de Esparta!\n");
  
  do {
    lugares.LesteE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //alquimia
        CentroTreinamento();
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

function FlorestaBrightwood() {
  console.clear();
  console.log("Você está em Floresta Brightwood!\n");

  do {
    lugares.FlorestaBrightwood();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        SaidaE();
        break;
    
      case 2: //lago
        LagoPrespa();
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

function LagoPrespa() {
  console.clear();
  console.log("Você está em Lago Prespa!\n");
  
  do {
    lugares.LagoPrespa();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        SaidaE();
        break;

      case 2: //florestaB
        FlorestaBrightwood();
        break;

      case 3: //everleste
        Everleste();
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

function Everleste() {
  console.clear();
  console.log("Você está em Everleste!\n");
  
  do {
    lugares.Everleste();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //lago
        LagoPrespa();
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

function CentroE() {
  console.clear()
  console.log("Você está em Centro de Esparta!\n");
  
  do {
    lugares.CentroE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: // calquimia
        Trezentes();
        break;

      case 2: //trezentes
        Alquimia();
        break;

      case 3: // saida
        SaidaE();
        break;

      case 4: // entrada
        EntradaE();
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

function FlorestaAmazonica() {
  console.clear();
  console.log("Você está em Floresta Amazônica!\n");
  
  do {
    lugares.FlorestaAmazonica();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //saida
        EntradaE();
        break;

      case 2: //lago
        CavernaMelissanthi();
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

function CavernaMelissanthi() {
  console.clear();
  console.log("Você está em Caverna de Melissanthi!\n");
  
  do {
    lugares.Everleste();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //florestaA
        FlorestaAmazonica();
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
