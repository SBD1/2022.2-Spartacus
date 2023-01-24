const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
let op;
var idGuerreiro = 0;
var moedasGuerreiro = 0;

//-------------------------------------------------------------------------------------------------
async function treinando() {
  op = Number(entrada("\nDeseja treinar ? (1-Sim/2-Não) "));
  if (op == 1) {
    console.log("1-Ganho de Força");
    console.log("2-Ganho de Defesa");
    console.log("3-Ganho de Habilidade");
    op = Number(entrada("\nInforme oq deseja treinar: "));

    async function buscarGuerreiro() {
      try {
        const res = await db.query(`SELECT idguerreiro FROM guerreiro`);
        idGuerreiro = Number(res.rows[0].idguerreiro);
        // console.log("AQUI:", idGuerreiro);
      } catch (err) {
        console.log(err);
      }
    }
    async function moedas() {
      try {
        const res = await db.query(`SELECT dinheiro FROM guerreiro`);
        moedasGuerreiro = Number(res.rows[0].dinheiro);
        // console.log("AQUI:", moedasGuerreiro);
      } catch (err) {
        console.log(err);
      }
    }
    async function subMoedas() {
      try {
        const res = await db.query(
          `UPDATE guerreiro SET dinheiro = ${
            moedasGuerreiro - 20
          } WHERE dinheiro = ${moedasGuerreiro}`
        );
        // console.log("Suas moedas:", moedasGuerreiro);
      } catch (err) {
        console.log(err);
      }
    }

    switch (op) {
      case 1:
        console.clear();
        await moedas();
        await subMoedas(moedasGuerreiro);
        console.log(
          "Você esta prestes a começar um treino de FORÇA. Os treinos são pagos e contém níveis, você pode fazer: "
        );
        if (moedasGuerreiro >= 20 && moedasGuerreiro < 35) {
          console.log(
            "Treino de Força LEVE custa $20 moedas e aumenta sua força em 2 pontos."
          );
          console.log("Treino de Força LEVE realizado - $20 moedas.");
          await subMoedas();
        }

        if (moedasGuerreiro >= 35 && moedasGuerreiro < 50) {
          console.log(
            "Treino de Força MODERADO custa $35 moedas e aumenta sua força em 5 pontos."
          );
        }

        if (moedasGuerreiro >= 50) {
          console.log(
            "Treino de Força ALTO custa $50 moedas e aumenta sua força em 8 pontos."
          );
        }

        break;
      case 2:
        console.clear();

        console.log(
          "Você esta prestes a começar um treino de DEFESA. Os treinos são pagos e contém níveis: "
        );
        console.log(
          "1- Treino de Defesa LEVE custa $20 moedas e aumenta sua defesa em 2 pontos."
        );
        console.log(
          "2- Treino de Defesa MODERADO custa $35 moedas e aumenta sua defesa em 5 pontos."
        );
        console.log(
          "3- Treino de Defesa ALTO custa $50 moedas e aumenta sua defesa em 8 pontos."
        );
        op = Number(entrada("\nQual nível você gostaria de treinar?"));

        break;
      case 3:
        console.clear();

        console.log(
          "Você esta prestes a começar um treino de HABILIDADE. Os treinos são pagos e contém níveis: "
        );
        console.log(
          "1- Treino de Habilidade LEVE custa $20 moedas e aumenta sua habilidade em 2 pontos."
        );
        console.log(
          "2- Treino de Habilidade MODERADO custa $35 moedas e aumenta sua habilidade em 5 pontos."
        );
        console.log(
          "3- Treino de Habilidade ALTO custa $50 moedas e aumenta sua habilidade em 8 pontos."
        );
        op = Number(entrada("\nQual nível você gostaria de treinar?"));
        console.clear();

        break;
      default:
        console.clear();
        console.log("Opção inválida!\n");
        break;
    }
  }
}
//-------------------------------------------------------------------------------------------------
module.exports = { treinando };
