const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
let op;
const lugares = require("./locais");
const treinar = require("./treino");
const batalha = require("./batalha");
const missao = require("./missao");
const comprar = require("./comprar");
const consultar = require("./casa");

async function Trezentes(idGuerreiro) {
  console.clear();
  console.log("Você está em Trezentes - Loja de equipamentos!\n");
  try {
    res = await db.query(`SELECT descricao FROM loja WHERE idloja = 2`);
    console.log(res.rows[0].descricao + "\n");
  } catch (err) {
    console.log(err);
  }

  try {
    const res = await db.query(
      `SELECT nomenpc, descricao, fala FROM amigável WHERE idnpc=2`
    );

    console.log(
      `O dono desta loja se chama ${res.rows[0].nomenpc}. ${res.rows[0].descricao}\n\n– ${res.rows[0].fala}\n`
    );
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(4), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=4 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  console.log("Deseja comprar equipamento?\n1. Sim\n2. Não");
  op = Number(entrada("Insira o número da sua resposta: "));

  if (op == 1) {
    do {
      console.clear();
      console.log("O que está procurando?\n1. Armas\n2. Armaduras");
      const op2 = Number(entrada("Insira o número da sua resposta: "));

      if (op2 == 1) {
        await comprar.compraArma(idGuerreiro);
      } else if (op2 == 2) {
        await comprar.compraArmadura(idGuerreiro);
      }

      console.log("Deseja comprar mais?\n1. Sim\n2. Não");
      op = Number(entrada("Insira o número da sua resposta: "));
    } while (op == 1);
  }

  do {
    console.clear();
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
  try {
    res = await db.query(`SELECT descricao FROM loja WHERE idloja = 1`);
    console.log(res.rows[0].descricao + "\n");
  } catch (err) {
    console.log(err);
  }

  try {
    const res = await db.query(
      `SELECT nomenpc, descricao, fala FROM amigável WHERE idnpc=1`
    );

    console.log(
      `O dono desta loja se chama ${res.rows[0].nomenpc}. ${res.rows[0].descricao}\n\n– ${res.rows[0].fala}\n`
    );
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(4), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=4 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  console.log("Deseja comprar poções?\n1. Sim\n2. Não");
  op = Number(entrada("Insira o número da sua resposta: "));

  if (op == 1) {
    do {
      await comprar.compraPocao(idGuerreiro);

      console.log("Deseja comprar mais?\n1. Sim\n2. Não");
      op = Number(entrada("Insira o número da sua resposta: "));
    } while (op == 1);
  }

  do {
    console.clear();
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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 8`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(8), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=8 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  //------- Menu de Missões --------------------------------
  try {
    res = await db.query(
    `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 21`
  );
  if (res.rows.length == 0) {
    op = Number(
      entrada(
        "\nVocê tem um inimigo por perto, deseja enfrentá-lo? (1 - SIM / 2 - NÃO): "
      )
    );
    if (op == 1) {
      console.clear();
      await missao.imprime_missao(21);
      op = Number(
        entrada(
          "\nQuer mesmo enfrentá-lo? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1){
        console.clear();
        await missao.missao021(idGuerreiro);
      }
    }
  } else {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 22`
    );
    if (res.rows.length == 0) {
      op = Number(
        entrada(
          "\nVocê tem um inimigo por perto, deseja enfrentá-lo? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1) {
        console.clear();
        await missao.imprime_missao(22);
        op = Number(
          entrada(
            "\nQuer mesmo enfrentá-lo? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1){
          console.clear();
          await missao.missao022(idGuerreiro);
        }
      }
    }else {
      res = await db.query(
        `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 23`
      );
      if (res.rows.length == 0) {
        op = Number(
          entrada(
            "\nVocê tem um inimigo por perto, deseja enfrentá-lo? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1) {
          console.clear();
          await missao.imprime_missao(23);
          op = Number(
            entrada(
              "\nQuer mesmo enfrentá-lo? (1 - SIM / 2 - NÃO): "
            )
          );
          if (op == 1){
            console.clear();
            await missao.missao023(idGuerreiro);
          }
        }
      }
    }
  }
} catch (err) {
  console.log(err);
}
// ----------------------------------------------------------

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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 3`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 9`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(9), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=9 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  op = Number(
    entrada("Deseja batalhar?\n1. Sim\n2. Não\nInsira o número da sua resposta: ")
  );
  if (op == 1) {
    await batalha.main_batalhando(idGuerreiro);
  } else {
    console.log("Saindo do Centro de Batalha!");
  }

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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 6`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=6 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  console.log("Deseja treinar?\n1. Sim\n2. Não");
  op = Number(entrada("Insira o número da sua resposta: "));

  if (op == 1) {
    do {
      await treinar.treinar(idGuerreiro);

      console.log("Deseja treinar mais?\n1. Sim\n2. Não");
      op = Number(entrada("Insira o número da sua resposta: "));
    } while (op == 1);
  }

  do {
    console.clear();
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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 5`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(5), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=5 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  //------- Menu de Missões --------------------------------
    try {
      res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 24`
    );
    if (res.rows.length == 0) {
      op = Number(
        entrada(
          "\nVocê tem um inimigo por perto, deseja enfrentá-lo? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1) {
        console.clear();
        await missao.imprime_missao(24);
        op = Number(
          entrada(
            "\nQuer mesmo enfrentá-lo? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1){
          console.clear();
          await missao.missao024(idGuerreiro);
        }
      }
    } else {
      res = await db.query(
        `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 25`
      );
      if (res.rows.length == 0) {
        op = Number(
          entrada(
            "\nVocê tem um inimigo por perto, deseja enfrentá-lo? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1) {
          console.clear();
          await missao.imprime_missao(25);
          op = Number(
            entrada(
              "\nQuer mesmo enfrentá-lo? (1 - SIM / 2 - NÃO): "
            )
          );
          if (op == 1){
            console.clear();
            await missao.missao025(idGuerreiro);
          }
        }
      }else {
        res = await db.query(
          `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 26`
        );
        if (res.rows.length == 0) {
          op = Number(
            entrada(
              "\nVocê tem um inimigo por perto, deseja enfrentá-lo? (1 - SIM / 2 - NÃO): "
            )
          );
          if (op == 1) {
            console.clear();
            await missao.imprime_missao(26);
            op = Number(
              entrada(
                "\nQuer mesmo enfrentá-lo? (1 - SIM / 2 - NÃO): "
              )
            );
            if (op == 1){
              console.clear();
              await missao.missao026(idGuerreiro);
            }
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
  // ----------------------------------------------------------

  do {
    lugares.OesteE();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //centroT
        await Alquimia(idGuerreiro);
        break;

      case 2: //centroT
        await Casa(idGuerreiro);
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

async function LesteE(idGuerreiro) {
  console.clear();
  console.log("Você está em Leste de Esparta!\n");
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 7`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(7), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=7 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

    //------- Menu de Missões --------------------------------
  try {
    res = await db.query(
    `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 11`
  );
  if (res.rows.length == 0) {
    op = Number(
      entrada(
        "\nVocê tem um inimigo por perto, deseja enfrentá-lo? (1 - SIM / 2 - NÃO): "
      )
    );
    if (op == 1) {
      console.clear();
      await missao.imprime_missao(11);
      op = Number(
        entrada(
          "\nQuer mesmo enfrentá-lo? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1){
        console.clear();
        await missao.missao011(idGuerreiro);
      }
    }
  } else {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 12`
    );
    if (res.rows.length == 0) {
      op = Number(
        entrada(
          "\nVocê tem um inimigo por perto, deseja enfrentá-lo? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1) {
        console.clear();
        await missao.imprime_missao(12);
        op = Number(
          entrada(
            "\nQuer mesmo enfrentá-lo? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1){
          console.clear();
          await missao.missao012(idGuerreiro);
        }
      }
    }else {
      res = await db.query(
        `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 13`
      );
      if (res.rows.length == 0) {
        op = Number(
          entrada(
            "\nVocê tem um inimigo por perto, deseja enfrentá-lo? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1) {
          console.clear();
          await missao.imprime_missao(13);
          op = Number(
            entrada(
              "\nQuer mesmo enfrentá-lo? (1 - SIM / 2 - NÃO): "
            )
          );
          if (op == 1){
            console.clear();
            await missao.missao013(idGuerreiro);
          }
        }
      }
    }
  }
} catch (err) {
  console.log(err);
}
// ----------------------------------------------------------
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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 10`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(10), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=10 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

 //------- Menu de Missões --------------------------------
 try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 15`
    );
    if (res.rows.length == 0) {
      op = Number(
        entrada(
          "\nVocê tem uma missão disponível aqui, deseja fazê-la? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1) {
        console.clear();
        await missao.imprime_missao(15);
        op = Number(
          entrada(
            "\ndeseja mesmo fazê-la? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1){
          console.clear();
          await missao.missao015(idGuerreiro);
        }
      }
    } else {
      res = await db.query(
        `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 16`
      );
      if (res.rows.length == 0) {
        op = Number(
          entrada(
            "\nVocê tem uma missão disponível aqui, deseja fazê-la? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1) {
          console.clear();
          await missao.imprime_missao(16);
          op = Number(
            entrada(
              "\ndeseja mesmo fazê-la? (1 - SIM / 2 - NÃO): "
            )
          );
          if (op == 1){
            console.clear();
            await missao.missao016(idGuerreiro);
          }
        }
      }else{
        res = await db.query(
          `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 17`
        );
        if (res.rows.length == 0) {
          op = Number(
            entrada(
              "\nVocê tem uma missão disponível aqui, deseja fazê-la? (1 - SIM / 2 - NÃO): "
            )
          );
          if (op == 1) {
            console.clear();
            await missao.imprime_missao(17);
            op = Number(
              entrada(
                "\ndeseja mesmo fazê-la? (1 - SIM / 2 - NÃO): "
              )
            );
            if (op == 1){
              console.clear();
              await missao.missao017(idGuerreiro);
            }
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
  // ---------------------------------------
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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 11`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(11), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=11 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  // --------------------------------------------------------
  // Menu para selecionar missão ----------------------------
  try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 19`
    );
    if (res.rows.length == 0) {
      op = Number(
        entrada(
          "\nVocê tem uma missão disponível aqui, deseja fazê-la? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1) {
        console.clear();
        await missao.imprime_missao(19);
        op = Number(
          entrada(
            "\ndeseja mesmo fazê-la? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1){
          await missao.missao019(idGuerreiro);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }

//-------------------------------------------------------------------

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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 12`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }
  // updateIdLugar(Number(12), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=12 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  //------- Menu de Missões --------------------------------
 try {
  res = await db.query(
    `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 10`
  );
  if (res.rows.length == 0) {
    op = Number(
      entrada(
        "\nVocê tem uma missão disponível aqui, deseja fazê-la? (1 - SIM / 2 - NÃO): "
      )
    );
    if (op == 1) {
      console.clear();
      await missao.imprime_missao(10);
      op = Number(
        entrada(
          "\ndeseja mesmo fazê-la? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1){
        console.clear();
        await missao.missao010(idGuerreiro);
      }
    }
  } else {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 18`
    );
    if (res.rows.length == 0) {
      op = Number(
        entrada(
          "\nVocê tem uma missão disponível aqui, deseja fazê-la? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1) {
        console.clear();
        await missao.imprime_missao(18);
        op = Number(
          entrada(
            "\ndeseja mesmo fazê-la? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1){
          console.clear();
          await missao.missao018(idGuerreiro);
        }
      }
    }
  }
} catch (err) {
  console.log(err);
}

  //Lugares Possíveis --------------------------------------
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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 4`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 2`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(2), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=2 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }
   // Menu para selecionar missão ----------------------------
   try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 20`
    );
    if (res.rows.length == 0) {
      op = Number(
        entrada(
          "\nVocê tem uma missão disponível aqui, deseja fazê-la? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1) {
        console.clear();
        await missao.imprime_missao(20);
        op = Number(
          entrada(
            "\ndeseja mesmo fazê-la? (1 - SIM / 2 - NÃO): "
          )
        );
        if (op == 1){
          await missao.missao020(idGuerreiro);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }

  // --------------------------------------------------------

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
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 1`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(1), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=1 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  try {
    res = await db.query(
      `SELECT * FROM instancia_de_missao WHERE (idguerreiro=${idGuerreiro}) AND idmissao = 10`
    );
    if (res.rows.length == 0) {
      op = Number(
        entrada(
          "\nDeseja realizar a missão de Caverna de Melissanthi? (1 - SIM / 2 - NÃO): "
        )
      );
      if (op == 1) {
        await missao.missao014(idGuerreiro);
      }
    }
  } catch (err) {
    console.log(err);
  }

  // --------------------------------------------------------------------------------
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

async function Casa(idGuerreiro) {
  console.clear();
  console.log("Você está em casa!\n");
  try {
    res = await db.query(`SELECT descricaolugar FROM lugar WHERE idlugar = 13`);
    console.log(res.rows[0].descricaolugar + "\n");
  } catch (err) {
    console.log(err);
  }

  // updateIdLugar(Number(1), Number(idGuerreiro));
  try {
    const res = await db.query(
      `UPDATE guerreiro SET idlugar=13 WHERE idguerreiro=${idGuerreiro}`
    );
  } catch (err) {
    console.log(err);
  }

  console.log("Deseja consultar suas informações?\n1. Sim\n2. Não");
  op = Number(entrada("Insira o número da sua resposta: "));

  if (op == 1) {
    do {
      console.clear();
      await consultar.casa(idGuerreiro);

      console.log("Deseja consultar novamente?\n1. Sim\n2. Não");
      op = Number(entrada("Insira o número da sua resposta: "));
    } while (op == 1);
  }

  do {
    console.clear();
    lugares.Casa();
    op = Number(entrada("\nInforme para onde deseja ir: "));

    switch (op) {
      case 1: //florestaA
        await OesteE(idGuerreiro);
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
  Casa,
};
