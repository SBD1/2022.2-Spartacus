const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
let op;
var moedasGuerreiro = 0;
var defesaGuerreiro = 0;
var forcaGuerreiro = 0;
var habilidadeGuerreiro = 0;

//-------------------------------------------------------------------------------------------------
async function treinando() {
  do {
    op = Number(entrada("\nDeseja treinar ? (1-Sim/0-Não) "));
    if (op == 1) {
      console.log("1-Ganho de Força");
      console.log("2-Ganho de Defesa");
      console.log("3-Ganho de Habilidade");

      op = Number(entrada("\nInforme oq deseja treinar: "));

      // ------------------------------FORCA-----------------------------------------------------
      async function forca() {
        try {
          const res = await db.query(`SELECT forca FROM guerreiro`);
          forcaGuerreiro = Number(res.rows[0].forca);
        } catch (err) {
          console.log(err);
        }
      }
      async function addForca2() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET forca = ${
              forcaGuerreiro + 2
            } WHERE forca = ${forcaGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      async function addForca5() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET forca = ${
              forcaGuerreiro + 5
            } WHERE forca = ${forcaGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      async function addForca8() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET forca = ${
              forcaGuerreiro + 8
            } WHERE forca = ${forcaGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      // ------------------------------FORCA-----------------------------------------------------

      // ------------------------------HABILIDADE-----------------------------------------------------
      async function habilidade() {
        try {
          const res = await db.query(`SELECT habilidade FROM guerreiro`);
          habilidadeGuerreiro = Number(res.rows[0].habilidade);
        } catch (err) {
          console.log(err);
        }
      }
      async function addHabilidade2() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET habilidade = ${
              habilidadeGuerreiro + 2
            } WHERE habilidade = ${habilidadeGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      async function addHabilidade5() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET habilidade = ${
              habilidadeGuerreiro + 5
            } WHERE habilidade = ${habilidadeGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      async function addHabilidade8() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET habilidade = ${
              habilidadeGuerreiro + 8
            } WHERE habilidade = ${habilidadeGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      // ------------------------------HABILIDADE-----------------------------------------------------

      // ------------------------------DEFESA-----------------------------------------------------
      async function defesa() {
        try {
          const res = await db.query(`SELECT defesa FROM guerreiro`);
          defesaGuerreiro = Number(res.rows[0].defesa);
        } catch (err) {
          console.log(err);
        }
      }
      async function addDefesa2() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET defesa = ${
              defesaGuerreiro + 2
            } WHERE defesa = ${defesaGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      async function addDefesa5() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET defesa = ${
              defesaGuerreiro + 5
            } WHERE defesa = ${defesaGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      async function addDefesa8() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET defesa = ${
              defesaGuerreiro + 8
            } WHERE defesa = ${defesaGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      // ------------------------------DEFESA-----------------------------------------------------

      //----------------------------DINHEIRO-------------------------------------------------
      async function moedas() {
        try {
          const res = await db.query(`SELECT dinheiro FROM guerreiro`);
          moedasGuerreiro = Number(res.rows[0].dinheiro);
        } catch (err) {
          console.log(err);
        }
      }
      async function subMoedas20() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET dinheiro = ${
              moedasGuerreiro - 20
            } WHERE dinheiro = ${moedasGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      async function subMoedas35() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET dinheiro = ${
              moedasGuerreiro - 35
            } WHERE dinheiro = ${moedasGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      async function subMoedas50() {
        try {
          const res = await db.query(
            `UPDATE guerreiro SET dinheiro = ${
              moedasGuerreiro - 50
            } WHERE dinheiro = ${moedasGuerreiro}`
          );
        } catch (err) {
          console.log(err);
        }
      }
      //----------------------------DINHEIRO-------------------------------------------------
      await moedas();
      await forca();
      await defesa();
      await habilidade();

      switch (op) {
        case 1:
          console.clear();

          console.log(
            "Você esta prestes a começar um treino de FORÇA. Os treinos são pagos e contém níveis, você pode fazer: "
          );
          if (moedasGuerreiro >= 20 && moedasGuerreiro < 35) {
            console.log(
              "Treino de Força LEVE custa $20 moedas e aumenta sua força em 2 pontos."
            );
            op = Number(entrada("\nDeseja realizar ? (1-Sim/2-Não) "));
            if (op == 1) {
              await subMoedas20(moedasGuerreiro);
              await addForca2(forcaGuerreiro);
              console.log("Treino realizado - $20 moedas +2 forca.");
            }
            break;
          }

          if (moedasGuerreiro >= 35 && moedasGuerreiro < 50) {
            console.log(
              "Treino de Força MODERADO custa $35 moedas e aumenta sua força em 5 pontos."
            );
            op = Number(entrada("\nDeseja realizar ? (1-Sim/2-Não) "));
            if (op == 1) {
              await subMoedas35(moedasGuerreiro);
              await addForca5(forcaGuerreiro);
              console.log("Treino realizado - $35 moedas +5 forca.");
            }
            break;
          }

          if (moedasGuerreiro >= 50) {
            console.log(
              "Treino de Força ALTO custa $50 moedas e aumenta sua força em 8 pontos."
            );
            op = Number(entrada("\nDeseja realizar ? (1-Sim/2-Não) "));
            if (op == 1) {
              await subMoedas50(moedasGuerreiro);
              await addForca8(forcaGuerreiro);
              console.log("Treino realizado - $50 moedas +8 forca.");
            }
            break;
          } else {
            console.log("Você não tem moedas suficientes! ");
            console.log("MOEDAS:", moedasGuerreiro);
          }
          break;

        case 2:
          console.clear();

          console.log(
            "Você esta prestes a começar um treino de DEFESA. Os treinos são pagos e contém níveis, você pode fazer: "
          );
          if (moedasGuerreiro >= 20 && moedasGuerreiro < 35) {
            console.log(
              "Treino de Defesa LEVE custa $20 moedas e aumenta sua defesa em 2 pontos."
            );
            op = Number(entrada("\nDeseja realizar ? (1-Sim/2-Não) "));
            if (op == 1) {
              await subMoedas20(moedasGuerreiro);
              await addDefesa2(defesaGuerreiro);
              console.log("Treino realizado - $20 moedas +2 defesa.");
            }
            break;
          }
          if (moedasGuerreiro >= 35 && moedasGuerreiro < 50) {
            console.log(
              "Treino de Defesa MODERADO custa $35 moedas e aumenta sua defesa em 5 pontos."
            );
            op = Number(entrada("\nDeseja realizar ? (1-Sim/2-Não) "));
            if (op == 1) {
              await subMoedas35(moedasGuerreiro);
              await addDefesa5(defesaGuerreiro);
              console.log("Treino realizado - $35 moedas +5 defesa.");
            }
            break;
          }
          if (moedasGuerreiro >= 50) {
            console.log(
              "Treino de Defesa ALTO custa $50 moedas e aumenta sua defesa em 8 pontos."
            );
            op = Number(entrada("\nDeseja realizar ? (1-Sim/2-Não) "));
            if (op == 1) {
              await subMoedas50(moedasGuerreiro);
              await addDefesa8(defesaGuerreiro);
              console.log("Treino realizado - $50 moedas +8 defesa.");
            }
            break;
          } else {
            console.log("Você não tem moedas suficientes! ");
            console.log("MOEDAS:", moedasGuerreiro);
          }

          break;
        case 3:
          console.clear();

          console.log(
            "Você esta prestes a começar um treino de HABILIDADE. Os treinos são pagos e contém níveis, você pode fazer: "
          );
          if (moedasGuerreiro >= 20 && moedasGuerreiro < 35) {
            console.log(
              "Treino de Habilidade LEVE custa $20 moedas e aumenta sua habilidade em 2 pontos."
            );
            op = Number(entrada("\nDeseja realizar ? (1-Sim/2-Não) "));
            if (op == 1) {
              await subMoedas20(moedasGuerreiro);
              await addHabilidade2(habilidadeGuerreiro);
              console.log("Treino realizado - $20 moedas +2 habilidade.");
            }
            break;
          }

          if (moedasGuerreiro >= 35 && moedasGuerreiro < 50) {
            console.log(
              "Treino de Habilidade MODERADO custa $35 moedas e aumenta sua habilidade em 5 pontos."
            );
            op = Number(entrada("\nDeseja realizar ? (1-Sim/2-Não) "));
            if (op == 1) {
              await subMoedas35(moedasGuerreiro);
              await addHabilidade5(habilidadeGuerreiro);
              console.log("Treino realizado - $35 moedas +5 habilidade.");
            }
            break;
          }
          if (moedasGuerreiro >= 50) {
            console.log(
              "Treino de Habilidade ALTO custa $50 moedas e aumenta sua habilidade em 8 pontos."
            );
            op = Number(entrada("\nDeseja realizar ? (1-Sim/2-Não) "));
            if (op == 1) {
              await subMoedas50(moedasGuerreiro);
              await addHabilidade8(habilidadeGuerreiro);
              console.log("Treino realizado - $50 moedas +8 habilidade.");
            }
            break;
          } else {
            console.log("Você não tem moedas suficientes! ");
            console.log("MOEDAS:", moedasGuerreiro);
          }
          break;

        default:
          console.clear();
          console.log("Opção inválida!\n");
          break;
      }
    }
  } while (op != 0);
}

//-------------------------------------------------------------------------------------------------
module.exports = { treinando };
