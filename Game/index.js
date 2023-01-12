const db = require("./database");
const fs = require('fs');
const entrada = require("prompt-sync")({ sigint: true });
const lugar = require("./func");

const createTables = async () => {
  var ddl = fs.readFileSync('DDL.sql').toString();
  db.query(ddl)
  .then(res => console.log('TABELAS CRIADAS COM SUCESSO!'))
  .catch(e => console.error(e.stack))
}

const populateTables = async () => {
  var dml = fs.readFileSync('DML.sql').toString(); 
  db.query(dml)
  .then(res => console.log('TABELAS POPULADAS COM SUCESSO!'))
  .catch(e => console.error(e.stack))
}

function jogar() {
  lugar.CentroE();
}

function main() {
  console.clear();

  console.log("\n----------------------------------------------------");
  console.log("| Bem-vindo, guerreiro, ao início da sua aventura! |");
  console.log("----------------------------------------------------\n");

  op = 0;
  do {
    console.log("1. Jogar");
    console.log("2. Criar e popular tabelas");
    console.log("3. Sair\n");
    const op = Number(entrada("Insira a opção que deseja: "));

    switch (op) {
      case 1:
        console.clear();
        jogar();
        break;

      case 2:
        console.clear();

        // createTables();
        // populateTables();

        do {
          console.log("\n1. Jogar");
          console.log("2. Sair\n");
          const op = Number(entrada("Insira a opção que deseja: "));

          switch (op) {
            case 1:
              console.clear();
              jogar();
              break;
          
            case 2:
              process.exit();
              break;
          
            default:
              console.clear();
              console.log("Opção inválida!");
              break;
          }
        } while (op >= 1 || op <= 2);
        
        break;

      case 3:
        process.exit();
        break;

      default:
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  } while (op >= 1 || op <= 3);

  
}

main();