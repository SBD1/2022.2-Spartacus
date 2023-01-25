const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
let op, idNPC = 0, idGuerreiro = 0;

async function calculaDano (vidaTotal, danoNPC) {
    return vidaTotal - danoNPC;
}

async function batalha (idGuerreiro, idNPC) {
    const vidaGuerreiro = await db.query(`SELECT vida FROM guerreiro WHERE id=${idGuerreiro}`);
    const defesaGuerreiro = await db.query(`SELECT defesa FROM guerreiro WHERE id=${idGuerreiro}`);
    const forcaGuerreiro = await db.query(`SELECT forca FROM guerreiro WHERE id=${idNPC}`);
    const danoArma = await(`SELECT`);
    const vidaNPC = await db.query(`SELECT vida FROM inimigo WHERE idnpc=${idNPC}`);
    const danoNPC = await db.query(`SELECT dano FROM inimigo WHERE idnpc=${idNPC}`);
    var vidaTotal = vidaGuerreiro + defesaGuerreiro;
    while (vidaNPC < 0 || vidaGuerreiro < 0) {
        var damage = calculaDano(vidaTotal, danoNPC);
        console.log("Vida atual: " + damage);
    }
}

async function batalhando(){
    op = Number(entrada("\nDeseja batalhar? (1-Sim/2-Não) "));
    do {
        if (op == 1){
            console.clear();
            console.log("1 - Carniceiro");
            console.log("2 - Kane");
            console.log("3 - Dominador");
            console.log("4 - Tormenta");
            console.log("5 - Aniquilador");
            console.log("6 - Sair do Centro de Batalha");
            op = Number(entrada("Com quem deseja batalhar?"));
    
            switch (op) {
                case 1: 
                    console.clear();
                    res = await db.query(`SELECT descricao FROM inimigo WHERE idnpc = 4`);
                    idNPC = await db.query(`SELECT idnpc FROM inimigo WHERE idnpc = 4`);
                    idGuerreiro = await db.query("SELECT idguerreiro FROM guerreiro WHERE idnpc = 4");
                    console.log(res.rows[0].descricao + "\n");
                    batalha(idNPC, idGuerreiro);
                    break;
                case 2:     
                    console.clear();
                    res = await db.query(`SELECT descricao FROM inimigo WHERE idnpc = 5`);
                    console.log(res.rows[0].descricao + "\n");
                    break;
                case 3:
                    console.clear();     
                    res = await db.query(`SELECT descricao FROM inimigo WHERE idnpc = 6`);
                    console.log(res.rows[0].descricao + "\n");
                    break;
                case 4:
                    console.clear();
                    res = await db.query(`SELECT descricao FROM inimigo WHERE idnpc = 7`);
                    console.log(res.rows[0].descricao + "\n");
                    break;
                case 5:
                    console.clear();
                    res = await db.query(`SELECT descricao FROM inimigo WHERE idnpc = 8`);
                    console.log(res.rows[0].descricao + "\n");
                    break;
                default: 
                    console.log("Opção Inválida! Digite novamente ou 6 para SAIR!");
            }
        }
    } while (op != 6);
    
}

module.exports = { batalhando };