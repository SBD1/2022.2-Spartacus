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
    case "1":
      break;

    case "2":
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
    case "1":
      break;

    case "2":
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
    case "1":
      break;

    case "2":
      break;

    case "3":
      break;

    case "4":
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
    case "1":
      break;

    case "2":
      break;
  }
}

module.exports = { Trezentes, Alquimia, SaidaE, EntradaE };
