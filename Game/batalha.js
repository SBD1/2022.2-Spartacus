const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });
let op, idNPC = 0;

// async function calculaDano (vida_total, dano_npc) {
//    return vida_total - dano_npc;
//}

/* 
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
*/

async function menuOpcoes(){
    try {
        const res = await db.query(`SELECT idnpc, nomenpc FROM inimigo WHERE idnpc BETWEEN 4 AND 8 ORDER BY idnpc`);
        res.rows.map(({idnpc, nomenpc}) => (console.log(`${Number(idnpc) - 3}. ${nomenpc}`)));
    } catch (err) {
        console.log(err);
    }
}

async function printDescricao(idNPC){
    try {
        const res = await db.query(`SELECT descricao FROM inimigo WHERE idnpc=${idNPC + 3}`);
        console.log(res.rows[0].descricao);
    } catch (err) {
        console.log(err);
    }
}

async function batalha (idGuerreiro, idNPC) {
    try {
        const res = await db.query(`SELECT vida, defesa, forca FROM guerreiro WHERE idguerreiro=${idGuerreiro}`);
        var vidaGuerreiro = Number(res.rows[0].vida);
        var defesaGuerreiro = Number(res.rows[0].defesa);
        var forcaGuerreiro = Number(res.rows[0].forca);
    } catch (err) {
        console.log(err);
    }

    try {
        const res = await db.query(`SELECT vida, dano FROM inimigo WHERE idnpc=${idNPC + 3}`);
        var vidaNPC = Number(res.rows[0].vida);
        var danoNPC = Number(res.rows[0].dano);
    } catch (err) {
        console.log(err);
    }

    try {
        const res = await db.query(`SELECT I.iditem
                                    FROM instancia_de_item IT
                                    INNER JOIN item I ON I.iditem = IT.iditem
                                    INNER JOIN mochila M ON M.idinstancia = IT.idinstancia
                                    WHERE IT.idguerreiro = ${idGuerreiro}`);
    } catch (err) {
        console.log(err);
    }
}

/* SELECT AR.potencia, AR.nome
FROM instancia_de_item IT
INNER JOIN item I ON I.iditem = IT.iditem
INNER JOIN arma AR ON AR.iditem = I.iditem
INNER JOIN mochila MO ON MO.idinstancia = IT.idinstancia
WHERE IT.idguerreiro = 1; */

async function batalhando (idGuerreiro) {
    op = Number(entrada("Bem vindo ao Centro de Batalha! Deseja batalhar? (1-Sim/2-Não) "));
    if (op == 1) {
        await menuOpcoes();
        idNPC = Number(entrada("Selecione o inimigo que deseja batalhar: "));
        await printDescricao(idNPC); 
        await batalhando(idGuerreiro, idNPC);
    } else {
        console.log('Saindo do Centro de Batalha!');
    }
}

module.exports = { batalhando };