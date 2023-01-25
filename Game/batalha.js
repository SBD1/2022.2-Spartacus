const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
let op, idGuerreiro = 0, idNPC = 0;

// async function calculaDano (vida_total, dano_npc) {
//    return vida_total - dano_npc;
//}

async function batalha (idGuerreiro, idNPC) {

    try {
        res = await db.query(`SELECT vida FROM guerreiro`);
        var vidaGuerreiro = Number(res.rows[0].vida);
        console.log(vidaGuerreiro);
    } catch (err) {
        console.log(err);
    }

    try {
        res = await db.query(`SELECT defesa FROM guerreiro`);
        var defesaGuerreiro = Number(res.rows[0].defesa);
        console.log(defesaGuerreiro);
    } catch (err) {
        console.log(err);
    }

    try {
        res = await db.query(`SELECT vida FROM inimigo`);
        var vidaNPC = Number(res.rows[0].vida);
        console.log(vidaNPC);
    } catch (err) {
        console.log(err);
    }

    try {
        res = await db.query(`SELECT dano FROM inimigo`);
        var danoNPC = Number(res.rows[0].dano);
        console.log(danoNPC);
    } catch (err) {
        console.log(err);
    }

    // const forcaGuerreiro = await db.query(`SELECT forca FROM guerreiro WHERE idguerreiro=${idNPC}`);
    // const danoArma = await db.query(`SELECT`);

    var vida_total = vidaGuerreiro + defesaGuerreiro;

    console.log("Vida guerreiro: " + vida_total);

    //while (vidaNPC < 0 || vidaGuerreiro < 0) {
    //      var damage = await calculaDano(vida_total, dano_npc);
    //    console.log("Vida atual: " + damage);
    // }
}

async function batalhando(){
    op = Number(entrada("\nDeseja batalhar? (1-Sim/2-Não) "));
    do {
        if (op == 1){
            console.log("1 - Carniceiro");
            console.log("2 - Kane");
            console.log("3 - Dominador");
            console.log("4 - Tormenta");
            console.log("5 - Aniquilador");
            console.log("6 - Sair do Centro de Batalha");
            op = Number(entrada("Com quem deseja batalhar?"));
    
            switch (op) {
                case 1: 
                
                    try {
                        res = await db.query(`SELECT descricao FROM inimigo WHERE idnpc = 4`);
                        console.log(res.rows[0].descricao + "\n");
                    } catch (err) {
                        console.log(err)
                    }
                    
                    try {
                        res = await db.query(`SELECT idnpc FROM inimigo WHERE idnpc = 4`);
                        idNPC = Number(res.rows[0].idnpc);
                        console.log(idNPC);
                    } catch (err) {
                        console.log(err);
                    }

                    try {
                        res = await db.query(`SELECT idguerreiro FROM guerreiro`);
                        idGuerreiro = Number(res.rows[0].idguerreiro);
                        console.log(idGuerreiro);
                    } catch (err) {
                        console.log(err);
                    }
        
                    await batalha(idNPC, idGuerreiro);
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