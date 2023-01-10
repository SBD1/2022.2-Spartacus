-- Busca pelo nome e descrição do lugar que o guerreiro está
SELECT NomeLugar, DescricaoLugar
FROM Lugar
WHERE idLugar = %d;

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
WHERE b.idBatalha = %d;

-- Busca pelas informações da loja e também as informações do seu dono
SELECT l.Nome, l.Descricao, a.NomeNPC, a.Descricao
FROM Loja l
INNER JOIN Amigável a ON l.idAmigavel = a.idNPC
WHERE l.idLoja = %d;

-- Busca pelos atributos de todos os treinos para que o guerreiro possa escolher o que treinar
SELECT * FROM Treino;

-- Busca pelas informações de um inimgo específico que o guerreiro for enfrentar
SELECT NomeNPC, Descricao, Dano, Vida
FROM Inimigo
WHERE idNPC = %d AND TipoNPC = 'Inimigo';

-- Busca pelas informações de uma missão específica
SELECT NomeMissao, DescricaoMissao, Objetivo, Recompensa
FROM Missao
WHERE idMissao = %d;

-- Busca pelos atributos de um guerreiro específico
SELECT g.Nome, g.Dinheiro, g.Vida, g.Forca, g.Defesa, g.Respeito, g.Habilidade, l.NomeLugar
FROM Guerreiro g
INNER JOIN Lugar l ON g.idLugar = l.idLugar
WHERE idGuerreiro = %d;


