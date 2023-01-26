const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
let op, idNPC = 0;

// async function calculaDano (vida_total, dano_npc) {
//    return vida_total - dano_npc;
//}

async function menuOpcoes(){
    console.log("1 - Carniceiro");
    console.log("2 - Kane");
    console.log("3 - Dominador");
    console.log("4 - Tormenta");
    console.log("5 - Aniquilador");
    console.log("6 - Sair do Centro de Batalha");
}

async function batalha (idNPC, idGuerreiro) {

    try {
        res = await db.query(`SELECT vida, defesa, forca FROM guerreiro WHERE idguerreiro=${idGuerreiro}`);
        var vidaGuerreiro = Number(res.rows[0].vida);
        var defesaGuerreiro = Number(res.rows[0].defesa);
        var forcaGuerreiro = Number(res.rows[0].forca);
    } catch (err) {
        console.log(err);
    }

    try {
        res = await db.query(`SELECT vida, dano FROM inimigo WHERE idnpc=${idNPC}`);
        var vidaNPC = Number(res.rows[0].vida);
        var danoNPC = Number(res.rows[0].dano);
    } catch (err) {
        console.log(err);
    }

    var vida_total = vidaGuerreiro + defesaGuerreiro;

    console.log("Vida Total Guerreiro: " + vida_total);

    while (vidaNPC < 0 || vidaGuerreiro < 0) {
        var damage = await calculaDano(vida_total, danoNPC);
        console.log("Vida atual: " + damage);
    }
}

async function switchInimigos(op, idGuerreiro){
    switch (op) {
        case 1: 
            try {
                res = await db.query(`SELECT idnpc, descricao FROM inimigo WHERE idnpc = 4`);
                console.log(res.rows[0].descricao + "\n");
                idNPC = Number(res.rows[0].idnpc);
            } catch (err) {
                console.log(err)
            }
            await batalha(idNPC, idGuerreiro);
            break;
        case 2:
            try {
                res = await db.query(`SELECT idnpc, descricao FROM inimigo WHERE idnpc = 5`);
                console.log(res.rows[0].descricao + "\n");
                idNPC = Number(res.rows[0].idnpc);
            } catch (err) {
                console.log(err)
            }
            await batalha(idNPC, idGuerreiro);
            break;
        case 3: 
            try {
                res = await db.query(`SELECT idnpc, descricao FROM inimigo WHERE idnpc = 6`);
                console.log(res.rows[0].descricao + "\n");
                idNPC = Number(res.rows[0].idnpc);
            } catch (err) {
                console.log(err)
            }
            await batalha(idNPC, idGuerreiro);
            break;
        case 4: 
            try {
                res = await db.query(`SELECT idnpc, descricao FROM inimigo WHERE idnpc = 7`);
                console.log(res.rows[0].descricao + "\n");
                idNPC = Number(res.rows[0].idnpc);
            } catch (err) {
                console.log(err)
            }
            await batalha(idNPC, idGuerreiro);
            break;
        case 5: 
            try {
                res = await db.query(`SELECT idnpc, descricao FROM inimigo WHERE idnpc = 8`);
                console.log(res.rows[0].descricao + "\n");
                idNPC = Number(res.rows[0].idnpc);
            } catch (err) {
                console.log(err)
            }
            await batalha(idNPC, idGuerreiro);
            break;
        case 6 :
            console.log("Saindo do Centro de Batalha! \n");
            break;
        default: 
            console.log("Opção Inválida! Digite novamente ou 6 para SAIR!");
    }
}

async function batalhando(idGuerreiro){
    op = Number(entrada("\nDeseja batalhar? (1-Sim/2-Não) "));
        if (op == 1){
            do {
                await menuOpcoes();
                op = Number(entrada("Com quem deseja batalhar? "));
                await switchInimigos(op, idGuerreiro);
            } while (op != 6);
        }
}

module.exports = { batalhando };