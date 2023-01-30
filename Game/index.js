const db = require("./database");
const fs = require('fs');
const entrada = require("prompt-sync")({ sigint: true });
const lugar = require("./func");
var idGuerreiro = 0;

async function createTables() {
  var ddl = fs.readFileSync('DDL.sql').toString();
  db.query(ddl)
  .then(res => console.log('TABELAS CRIADAS COM SUCESSO!'))
  .catch(e => console.error(e.stack))
}

async function createTriggers() {
  var triggers = fs.readFileSync('Trigger_and_Procedures.sql').toString();
  db.query(triggers)
  .then(res => console.log('TRIGGERS CRIADAS COM SUCESSO!'))
  .catch(e => console.error(e.stack))
}

async function populateTables() {
  var dml = fs.readFileSync('DML.sql').toString(); 
  db.query(dml)
  .then(res => console.log('TABELAS POPULADAS COM SUCESSO!'))
  .catch(e => console.error(e.stack))
}

async function jogar() {
  console.clear();

  console.log("------------------");
  console.log("| SPARTACUS GAME |");
  console.log("------------------\n");

  const nome = entrada("Digite o nome do seu guerreiro: ");

  try {
    const res = await db.query(`SELECT idguerreiro FROM guerreiro WHERE nome='${nome}'`)

    if (res.rows.length === Number(0)) {
      try {
        const res = await db.query(`INSERT INTO guerreiro (nome) VALUES ('${nome}')`)
        console.log(`Novo guerreiro! Criando ${nome}...`)

      } catch (err) {
        console.log(err)
      }

      try {
        const res = await db.query(`SELECT idguerreiro FROM guerreiro WHERE nome='${nome}'`)

        idGuerreiro = Number(res.rows[0].idguerreiro);
    
      } catch (err) {
        console.log(err)
      }

      try {
        const res = await db.query(`INSERT INTO mochila (idguerreiro) VALUES (${idGuerreiro})`)

      } catch (err) {
        console.log(err)
      }

    } else {
      console.log(`Entrando com guerreiro ${nome}...`)
      idGuerreiro = Number(res.rows[0].idguerreiro);
    }
  } catch (err) {
    console.log(err)
  }
  
  await new Promise(r => setTimeout(r, 3000));
  
  await lugar.CentroE(idGuerreiro);
}

async function main() {
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
        await jogar();
        break;

      case 2:
        console.clear();

        createTables(); 
        await new Promise(r => setTimeout(r, 3500));

        createTriggers(); 
        await new Promise(r => setTimeout(r, 3500));

        populateTables();
        await new Promise(r => setTimeout(r, 3500));

        do {
          console.log("\n1. Jogar");
          console.log("2. Sair\n");
          const op = Number(entrada("Insira a opção que deseja: "));

          switch (op) {
            case 1:
              console.clear();
              await jogar();
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