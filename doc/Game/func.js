const entrada = require("prompt-sync")({ sigint: true });
let op;
const lugares = require("./locais");

function Trezentes() {
  console.log("Você está em Trezentes - Loja de equipamentos!");
  lugares.Trezentes();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": //centro
      CentroE();
      break;

    case "2": //centroT
      CentroTreinamento();
      break;
  }
}

function Alquimia() {
  console.log("Você está em Alquimia - Loja de poções!");
  lugares.Alquimia();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": // centroB
      CentroBatalha();
      break;

    case "2": //cetroE
      CentroE();
      break;

    case "3": //oeste
      OesteE();
      break;
  }
}

function SaidaE() {
  console.log("Você está em Saída de Esparta!");
  lugares.SaidaE();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": // centroB
      CentroBatalha();
      break;

    case "2": //CentroE
      CentroE();
      break;

    case "3": // lago
      LagoPrespa();
      break;

    case "4": // florestaB
      FlorestaBrightwood();
      break;
  }
}

function EntradaE() {
  console.log("Você está em Entrada de Esparta!");
  lugares.EntradaE();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": // centro
      CentroE();
      break;

    case "2": // florestaA
      FlorestaAmazonica();
      break;
  }
}

function CentroBatalha() {
  console.log("Você está em Centro de Batalha!");
  lugares.CentroBatalha();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": //saida
      SaidaE();
      break;

    case "2": // alquimia
      Alquimia();
      break;
  }
}

function CentroTreinamento() {
  console.log("Você está em Centro de Treinamento!");
  lugares.CentroTreinamento();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": //trezentes
      Trezentes();
      break;

    case "2": // leste
      LesteE();
      break;
  }
}

function OesteE() {
  console.log("Você está em Oeste de Esparta!");
  lugares.OesteE();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": //centroT
      CentroTreinamento();
      break;
  }
}

function LesteE() {
  console.log("Você está em Leste de Esparta!");
  lugares.LesteE();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": //alquimia
      Alquimia();
      break;
  }
}

function FlorestaBrightwood() {
  console.log("Você está em Floresta Brightwood!");
  lugares.FlorestaBrightwood();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": //saida
      SaidaE();
      break;
    case "2": //lago
      LagoPrespa();
      break;
  }
}

function LagoPrespa() {
  console.log("Você está em Lago Prespa!");
  lugares.LagoPrespa();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": //saida
      SaidaE();
      break;
    case "2": //florestaB
      FlorestaBrightwood();
      break;
    case "3": //everleste
      Everleste();
      break;
  }
}

function Everleste() {
  console.log("Você está em Everleste!");
  lugares.Everleste();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": //lago
      LagoPrespa();
      break;
  }
}

function CentroE() {
  console.log("Você está em Centro de Esparta!");
  lugares.CentroE();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": // calquimia
      Alquimia();
      break;

    case "2": //trezentes
      Trezentes();
      break;

    case "3": // saida
      SaidaE();
      break;

    case "4": // entrada
      EntradaE();
      break;
  }
}

function FlorestaAmazonica() {
  console.log("Você está em Floresta Amazônica!");
  lugares.FlorestaAmazonica();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": //saida
      SaidaE();
      break;
    case "2": //lago
      LagoPrespa();
      break;
  }
}

function CavernaMelissanthi() {
  console.log("Você está em Caverna de Melissanthi!");
  lugares.Everleste();
  op = entrada(
    "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
  );
  switch (op) {
    case "1": //florestaA
      FlorestaAmazonica();
      break;
  }
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
