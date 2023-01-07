INSERT INTO Lugar (idLugar, NomeLugar, DescricaoLugar) VALUES 
(1, 'Caverna de Melissanthi', ''),
(2, 'Floresta Amazônica', ''), 
(3, 'Entrada de Esparta', ''), 
(4, 'Centro de Esparta', ''),
(5, 'Oeste de Esparta', ''), 
(6, 'Centro de Treinamento', ''), 
(7, 'Leste de Esparta', ''), 
(8, 'Saída de Esparta', ''), 
(9, 'Centro de Batalha', ''), 
(10, 'Floresta Brightwood', ''),
(11, 'Lago Prespa', ''),
(12, 'Everlest', '');

-------------------------------------------------

INSERT INTO Amigável (idNPC, NomeNPC, Descricao, TipoNPC, Fala) VALUES 
(1, 'Argus Floros', 'Criado na floresta, Argus é um grande conhecedor das plantas e de suas propriedades, além disso, sua relação com o mundo espiritual creia você ou não, tornam suas poções SURREIAS!', 'Amigável', ' ');
(2, 'Orion Katsaros', 'Orion desde pequeno ajudava seu pai na construção de armas e armaduras, por consequência, ele se tornou um armeiro excepcional. Não tenha dúvidas que ao comprar um armamento com ele você estará fazendo um ótimo negócio ', 'Amigável', ' ');

-------------------------------------------------

INSERT INTO Arma (idItem, Quantidade, ValorItem, TipoItem, TipoArma, Potencia) VALUES
(1, 25, 100, 'Arma', 'Machadinho de Pedra', 2),
(2, 23, 350, 'Arma', 'Machadinho de Ferro', 12),
(3, 21, 600, 'Arma', 'Machadinho de Ouro', 22),
(4, 19, 850, 'Arma', 'Machadinho de Aço Valiriano', 32),
(5, 25, 150, 'Arma', 'Cimitarra de Pedra', 4),
(6, 23, 400, 'Arma', 'Cimitarra de Ferro', 14),
(7, 21, 650, 'Arma', 'Cimitarra de Ouro', 24),
(8, 19, 900, 'Arma', 'Cimitarra de Aço Valiriano', 34),
(9, 23, 200, 'Arma', 'Alfange de Pedra', 6),
(10, 21, 450, 'Arma', 'Alfange de Ferro', 16),
(11, 19, 700, 'Arma', 'Alfange de Ouro', 26),
(12, 17, 950, 'Arma', 'Alfange de Aço Valiriano', 36),
(13, 20, 250, 'Arma', 'Rapieira de Pedra', 8),
(14, 18, 500, 'Arma', 'Rapieira de Ferro', 18),
(15, 16, 750, 'Arma', 'Rapieira de Ouro', 28),
(16, 14, 100, 'Arma', 'Rapieira de Aço Valiriano', 38),
(17, 16, 300, 'Arma', 'Excalibur de Pedra', 10),
(18, 14, 550, 'Arma', 'Excalibur de Ferro', 20),
(19, 12, 800, 'Arma', 'Excalibur de Ouro', 30),
(20, 10, 1050, 'Arma', 'Excalibur de Aço Valiriano', 40); 

-------------------------------------------------

INSERT INTO Poção (idItem, Quantidade, ValorItem, TipoItem, TipoPoc, QtdPoc) VALUES 
(21, 20, 50, 'Poção', 'Força - Fraco', 8),
(22, 20, 70, 'Poção', 'Força - Médio', 12),
(23, 20, 90, 'Poção', 'Força - Forte', 15),
(24, 20, 50, 'Poção', 'Defesa - Fraco', 8),
(25, 20, 70, 'Poção', 'Defesa - Médio', 12),
(26, 20, 90, 'Poção', 'Defesa - Forte', 15),
(27, 20, 50, 'Poção', 'Habilidade - Fraco', 8),
(28, 20, 70, 'Poção', 'Habilidade - Médio', 12),
(29, 20, 90, 'Poção', 'Habilidade - Forte', 15),
(30, 20, 50, 'Poção', 'Vida extra - Fraco', 8),
(31, 20, 70, 'Poção', 'Vida extra - Médio', 12),
(32, 20, 90, 'Poção', 'Vida extra - Forte', 15),
(33, 20, 50, 'Poção', 'Respeito - Fraco', 8),
(34, 20, 70, 'Poção', 'Respeito - Médio', 12),
(35, 20, 90, 'Poção', 'Respeito - Forte', 15);

-------------------------------------------------

INSERT INTO Armadura (idItem, Quantidade, ValorItem, TipoItem, TipoArmadura, Resistencia) VALUES 
(36, 50, 100, 'Armadura', 'Armadura de Madeira', 10),
(37, 40, 300, 'Armadura', 'Armadura de Ferro', 18),
(38, 30, 500, 'Armadura', 'Armadura de Ouro', 26),
(39, 20, 750, 'Armadura', 'Armadura de Aço Valiriano', 34),
(40, 10, 1000, 'Armadura', 'Armadura de Vibranium', 40); 

-------------------------------------------------

INSERT INTO Batalha (idBatalha, QtdRespeitoBat, QtdDinheiroBat) VALUES 
( , , ),
( , , ),
( , , ); 

-------------------------------------------------

INSERT INTO Loja (idLoja, Nome, Descricao, idAmigavel, idLugar) VALUES 
(1,'Alquimia','Aqui é onde a mágica aconte, escolha suas poções e ganhe vantagens na hora da batalha. Um bom feitiço pode ser a chave para a vitória', 1, 4),
(2,'Trezentes','Trezentes, a sua loja de armas. Os melhores equipamentos feitos pelo melhor armeiro da região', 2, 4);

-------------------------------------------------

INSERT INTO Treino ( idTreino, TipoTreino, ValorTreino, MelhoriaTreino) VALUES
(1, 'Ganho de Força Leve', 20, 2),
(2, 'Ganho de Força Moderado', 35, 5),
(3, 'Ganho de Força Alto', 50, 8),
(4, 'Ganho de Defesa Leve', 20, 2),
(5, 'Ganho de Defesa Moderado', 35, 5),
(6, 'Ganho de Defesa Alto', 50, 8),
(7, 'Ganho de Habilidade Leve', 20, 2),
(8, 'Ganho de Habilidade Moderado', 35, 5),
(9, 'Ganho de Habilidade Alto', 50, 8);

-------------------------------------------------

INSERT INTO Inimigo (idNPC, NomeNPC, Descricao, TipoNPC, Dano, Vida, idLugar) VALUES 
(3,'Dormammu',' ','Inimigo', , , ),
(4,'Carniceiro',' ','Inimigo', , , ),
(5,'Carniceiro',' ','Inimigo', , , ),
(6,'Dominador',' ','Inimigo', , , ),
(7,'Tormenta',' ','Inimigo', , , ),
(8,'Aniquilador',' ','Inimigo', , , ); 

-------------------------------------------------

INSERT INTO Missao(idMissao, NomeMissao, DescricaoMissao, Objetivo, Recompensa) VALUES
(1, 'Primeira Arma', 'Compre sua primeira arma!', 'Comprar uma arma.', 20),
(2, 'Necessidades Básicas', 'Compre sua primeira armadura!', 'Comprar uma armadura.', 20),
(3, '', '', '', 20);