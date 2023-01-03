//-------------------Constantes------------------
const entrada = require("prompt-sync")({ sigint: true });
let op;
const lugares = require("./locais");
const func = require("./func");

//-------------------Codigo----------------------------
console.log("--------------------------------------------------");
console.log("| Bem Vindo Guerreiro ao início da sua aventura! |");
console.log("--------------------------------------------------");
console.log("");
console.log("Todo Guerreiro começa no Centro de Esparta.");
console.log(
  "Um local extremamente belo, construído em pedra e marmóre e como o próprio nome diz localizado ao centro de toda cidade."
);
console.log("");
lugares.CentroE();
op = entrada(
  "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
);

switch (op) {
  case "1":
    func.Trezentes();
    break;

  case "2":
    func.Alquimia();
    break;

  case "3":
    func.SaidaE();
    break;

  case "4":
    func.EntradaE();
    break;

  default:
    console.log("Local não encontrado!");
    break;
}
