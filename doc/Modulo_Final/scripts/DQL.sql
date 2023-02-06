-- Busca pelo nome e descrição do lugar que o guerreiro está
SELECT NomeLugar, DescricaoLugar
FROM Lugar
WHERE idLugar = ${idLugar};

-- Busca pelos itens DISPONÍVEIS e seus atributos quando o guerreiro for comprar
SELECT idItem, TipoArma, Potencia, ValorItem
FROM Arma
WHERE Quantidade > 0;

SELECT idItem, TipoPoc, QtdPoc, ValorItem
FROM Poção
WHERE Quantidade > 0;

SELECT idItem, TipoArmadura, Resistencia, ValorItem
FROM Armadura
WHERE Quantidade > 0;

-- Busca pelas informações da batalha e seu respectivo inimigo
SELECT b.QtdRespeitoBat, b.QtdDinheiroBat, i.NomeNPC, i.Descricao
FROM Batalha b
INNER JOIN Inimigo i ON b.idInimigo = i.idInimigo
WHERE b.idBatalha = ${idBatalha};

-- Busca pelas informações da loja e também as informações do seu dono
SELECT l.Nome, l.Descricao, a.NomeNPC, a.Descricao, a.Fala
FROM Loja l
INNER JOIN Amigável a ON l.idAmigavel = a.idNPC
WHERE l.idLoja = ${idLoja};

-- Busca pelos atributos de todos os treinos para que o guerreiro possa escolher o que treinar
SELECT * FROM Treino;

-- Busca pelas informações de um inimgo específico que o guerreiro for enfrentar
SELECT NomeNPC, Descricao, Dano, Vida
FROM Inimigo
WHERE idNPC = ${idNPC} AND TipoNPC = 'Inimigo';

-- Busca pelas informações de uma missão específica
SELECT NomeMissao, DescricaoMissao, Objetivo, Recompensa
FROM Missao
WHERE idMissao = ${idMissao};

-- Busca pelos atributos de um guerreiro específico
SELECT g.Nome, g.Dinheiro, g.Vida, g.Forca, g.Defesa, g.Respeito, g.Habilidade, l.NomeLugar
FROM Guerreiro g
INNER JOIN Lugar l ON g.idLugar = l.idLugar
WHERE idGuerreiro = ${idGuerreiro};

-- Busca pelo item que o guerreiro está utilizando
SELECT IT.iditem
FROM instancia_de_item IT
INNER JOIN item I ON I.iditem = IT.iditem
INNER JOIN mochila MO ON MO.idinstancia = IT.idinstancia
WHERE IT.idguerreiro = ${idGuerreiro}

-- Busca pela potência da arma que o guerreiro está utilizando
SELECT AR.potencia
FROM instancia_de_item IT
INNER JOIN item I ON I.iditem = IT.iditem
INNER JOIN mochila MO ON MO.idinstancia = IT.idinstancia
INNER JOIN arma AR ON AR.iditem = I.iditem
WHERE IT.idguerreiro = ${idGuerreiro}

-- Busca pela resistência da armadura que o guerreiro está utilizando
SELECT AM.resistencia
FROM instancia_de_item IT
INNER JOIN item i ON I.iditem = IT.iditem
INNER JOIN mochila MO ON MO.idinstancia = IT.idinstancia
INNER JOIN armadura AM ON AM.iditem = I.iditem
WHERE IT.idguerreiro = ${idGuerreiro}

-- Busca pelas armas que o guerreiro comprou
SELECT i.idinstancia, ar.tipoarma, ar.potencia
FROM instancia_de_item i
INNER JOIN item it ON i.iditem = it.iditem
INNER JOIN arma ar ON it.iditem = ar.iditem
WHERE i.idguerreiro = ${idGuerreiro}
ORDER BY i.idinstancia

-- Busca pelas armaduras que o guerreiro comprou
SELECT i.idinstancia, ar.tipoarmadura, ar.resistencia
FROM instancia_de_item i
INNER JOIN item it ON i.iditem = it.iditem
INNER JOIN armadura ar ON it.iditem = ar.iditem
WHERE i.idguerreiro = ${idGuerreiro}
ORDER BY i.idinstancia

-- Busca pelos treinos que o guerreiro fez
SELECT t.tipotreino, t.melhoriatreino
FROM instancia_de_treino i
INNER JOIN treino t ON i.idtreino = t.idtreino
WHERE i.idguerreiro = ${idGuerreiro}
ORDER BY i.idinstancia

-- Busca pelas batalhas que o guerreiro batalhou
SELECT n.nomenpc, b.qtdrespeitobat, b.qtddinheirobat
FROM instancia_de_batalha i
INNER JOIN batalha b ON b.idbatalha = i.idbatalha
INNER JOIN inimigo n ON b.idinimigo = n.idnpc
WHERE i.idguerreiro = ${idGuerreiro}
ORDER BY i.idinstancia

-- Busca pelas missões que o guerreiro fez
SELECT m.nomemissao, m.objetivo, m.recompensa
FROM instancia_de_missao i
INNER JOIN missao m ON i.idmissao = m.idmissao
WHERE i.idguerreiro = ${idGuerreiro}
ORDER BY i.idinstancia, m.nomemissao