INSERT INTO Lugar (idLugar, NomeLugar, DescricaoLugar) VALUES 
(1, 'Caverna de Melissanthi', 'Caverna de Melissanthi é uma antiga caverna localizada fora da cidade de Esparta, responsável pela morte de bravos guerreiros que se aventuraram em desbravá-la. A lenda conta que é um lugar grande, onde a luz não habita e a profundidade não se conhece. Além disso, há algo ou alguém sobrenatural em seu interior, mas nunca descoberto, pois todos que entraram lá, nunca mais saíram. Seria corajoso o suficiente para desbravá-la?'),
(2, 'Floresta Amazônica', 'A Floresta Amazônica é o antigo lar das guerreiras Amazonas. Desde o último ataque de monstros à floresta, nunca mais se têm notícias delas. Esta floresta, hoje, é onde abriga os seus perigosos animais e monstros que se encondem entre as árvores colossais e se camuflam no verde musgo dos pântanos.'),
(3, 'Entrada de Esparta', 'A entrada de Esparta contém uma arquitetura única e tipicamente grega, composta de grandes pilares de mármore, com uma simetria jamais vista. É aqui onde você encontra receptividade e moradores esperançosos.'),
(4, 'Centro de Esparta', 'O centro de Esparta é um lugar amplo, repleto de feiras e lojas. É o local mais movimentado da cidade, você pode dar a sorte de encontrar um item por aqui. Além disso, oportunidades de missões surgem a todo momento.'),
(5, 'Oeste de Esparta', 'Além de uma bela vista para o pôr do sol, o oeste de Esparta é onde se encontra os templos e locais para meditação. É frequentado, majoritariamente, por religiosos ou apenas pessoas que procuram por paz e momentos de silêncio.'),
(6, 'Centro de Treinamento', 'Daqui é de onde saem os melhores guerreiros. O centro de treinamento é cheio de ferramentas e equipamentos necessários para levar à sua perfeição. Lembre-se sempre do ditado: "Treinamento difícil, guerra fácil".'),
(7, 'Leste de Esparta', 'É no leste de Esparta que se concentra os governantes da cidade e líderes do país. É um local cheio de assembleias e debates políticos, a famosa Eclésia se encontra aqui.'),
(8, 'Saída de Esparta', 'A saída de Esparta costuma ser escura, um verdadeiro passaporte para caminhos sombrios e perigosos. É pouco frequentada pelos moradores pois quem ousaria sair dessa amada cidade?'),
(9, 'Centro de Batalha', 'É aqui onde você terá suas batalhas mais duras, porém, todos poderão assistir à sua ascensão como um bravo guerreiro. O centro de batalha é um imenso complexo que comporta mais de 70 mil pessoas em sua arquibancada e é onde se concentra os maiores entretenimentos do povo espartano. Aqui você encontra guerreiros dos mais diversos lugares e culturas, terá coragem de lutar?'),
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

INSERT INTO Batalha (idBatalha, QtdRespeitoBat, QtdDinheiroBat, idInimigo) VALUES 
( , , , ),
( , , , ),
( , , , ); 

-------------------------------------------------

INSERT INTO Loja (idLoja, Nome, Descricao, idAmigavel, idLugar) VALUES 
(1,'Loja Alquimia','Alquimia é a loja de poções do mago de Esparta. Nesta loja você encontra diversas poções como: vida extra, força, habilidade, defesa, entre outros. A loja perfeita para guerreiros como você.', 1, 4),
(2,'Loja Trezentes','Trezentes é a loja de equipamentos do renomado ferreiro e armeiro de Esparta. Nesta loja você encontra armas e armaduras para todos os gostos e valores. Um guerreiro como você precisa de lojas como esta.', 2, 4);

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