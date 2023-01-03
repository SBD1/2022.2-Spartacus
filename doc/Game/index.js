//-------------------Constantes------------------
const entrada = require("prompt-sync")({ sigint: true });
let op;
const lugares = require("./locais");

//-------------------Codigo----------------------------
console.log("--------------------------------------------------");
console.log("| Bem Vindo Guerreiro ao início da sua aventura! |");
console.log("--------------------------------------------------");
console.log("");
console.log("Todo Guerreiro começa no Centro de Esparta.");
console.log(
  "Um local extremamente belo, construído em pedra e marmóre e como o próprio nome diz localizado ao centro de toda cidade."
);
console.log("Apartir daqui você pode se locomover por alguns locais! Veja:");
console.log("");
lugares.CentroE();
op = entrada(
  "Para qual desses locais você gostaria de ir? (Digite o numero do local)."
);

switch (op) {
  case "1":
    console.log("Você está em Trezentes - Loja de equipamentos!");
    break;

  case "2":
    console.log("Você está em Alquimia - Loja de poções!");
    break;

  case "3":
    console.log("Você está em Saída de Esparta!");
    break;

  case "4":
    console.log("Você está em Entrada de Esparta!");
    break;

  default:
    console.log("Local não encontrado!");
    break;
}
