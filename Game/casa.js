const db = require("./database");
const entrada = require("prompt-sync")({ sigint: true });

async function casa(idGuerreiro) {
	console.log("1. Equipar item.\n2. Visualizar meus atributos\n3. Meus treinos.\n4. Minhas batalhas.\n5. Minhas missões.\n");
	const op2 = Number(entrada("Informe o que deseja consultar: "));

	console.clear()
	if (op2 == 1) {


		// Implementar essa função depois que criar a tabela de mochila
		console.log("ESSA FUNÇÃO AINDA NÃO FOI IMPLEMENTADA\n")


	} else if (op2 == 2) {
		try {
			const res = await db.query(`SELECT nome, dinheiro, vida, forca, defesa, respeito, habilidade FROM guerreiro WHERE idguerreiro=${idGuerreiro}`)
			const imprime = res.rows.map(({ nome, dinheiro, vida, forca, defesa, respeito, habilidade }) => ( console.log(`Nome: ${nome}\nVida: ${vida}\nDinheiro: $${dinheiro},00\nForça: ${forca}\nDefesa: ${defesa}\nHabilidade: ${habilidade}\nRespeito: ${respeito}\n`) ));
	
		} catch (err) {
			console.log(err)
		}

	} else if (op2 == 3) {
		try {
			const res = await db.query(`SELECT t.tipotreino, t.melhoriatreino
																	FROM instancia_de_treino i
																	INNER JOIN treino t ON i.idtreino = t.idtreino
																	WHERE i.idguerreiro = ${idGuerreiro}
																	ORDER BY t.tipotreino`);

			if (res.rows.length === Number(0)) {
				console.log("Você ainda não possui treinos!\n")
			} else {
				const imprime = res.rows.map(({ tipotreino, melhoriatreino }) => ( console.log(`Tipo de treino: ${tipotreino} | Ganho: +${melhoriatreino}`) ));
				console.log(`\nNúmero de treinos: ${res.rows.length}\n\n`)
			}

		} catch (err) {
			console.log(err)
		}

	} else if (op2 == 4) {
		try {
			const res = await db.query(`SELECT n.nomenpc, b.qtdrespeitobat, b.qtddinheirobat
																	FROM instancia_de_batalha i
																	INNER JOIN batalha b ON b.idbatalha = i.idbatalha
																	INNER JOIN inimigo n ON b.idinimigo = n.idnpc
																	WHERE i.idguerreiro = ${idGuerreiro}
																	ORDER BY n.nomenpc`);

			if (res.rows.length === Number(0)) {
				console.log("Você ainda não possui batalhas!\n")
			} else {
				const imprime = res.rows.map(({ nomenpc, qtdrespeitobat, qtddinheirobat }) => ( console.log(`Inimigo: ${nomenpc} | Respeito: +${qtdrespeitobat} | Dinheiro: +$${qtddinheirobat},00`) ));
				console.log(`\nNúmero de batalhas: ${res.rows.length}\n\n`)
			}

		} catch (err) {
			console.log(err)
		}
			
	} else if (op2 == 5) {
		try {
			const res = await db.query(`SELECT m.nomemissao, m.objetivo, m.recompensa
																	FROM instancia_de_missao i
																	INNER JOIN missao m ON i.idmissao = m.idmissao
																	WHERE i.idguerreiro = ${idGuerreiro}
																	ORDER BY m.recompensa, m.nomemissao`);

			if (res.rows.length === Number(0)) {
				console.log("Você ainda não possui missões concluídas!\n")
			} else {
				const imprime = res.rows.map(({ nomemissao, objetivo, recompensa }) => ( console.log(`Missão: ${nomemissao} | Objetivo: ${objetivo} | Recompensa: +${recompensa}`) ));
				console.log(`\nNúmero de missões: ${res.rows.length}\n\n`)
			}

		} catch (err) {
			console.log(err)
		}
			
	} else {
		console.log("Opção inválida!\n");
	}
}

module.exports = {
  casa
};