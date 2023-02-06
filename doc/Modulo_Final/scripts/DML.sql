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
(10, 'Floresta Brightwood', 'Não existe consenso entre os moradores de Esparta se esse seria o lugar mais perigoso da região ou se seria a caverna. Também localizada fora das limitações da cidade, a Floresta Brightwood é caracterizada pela sua mata densa e fechada, além das mais diversas vegetações, com plantas carnívoras e árvores que chegam a tocar as nuvens. Cuidado! Aqui habita pessoas exiladas de Esparta por seus crimes bárbaros e monstros horripilantes.'),
(11, 'Lago Prespa', 'O Lago Prespa é um lugar majoritariamente calmo e que os moradores costumam usar para fazer seus piqueniques e passar o tempo com a família. É um lago de águas azuis e tão extenso que chega a atravessar toda a floresta e cobrir a saída de Esparta. Mas não se engane, este lugar não esconde seus crimes. Não se trata do local mais seguro, já que é fonte de água para os perigos que moram na Floresta Brightwood.'),
(12, 'Everlest', 'Totalmente afastado da cidade mas, ainda assim, é uma das maiores riquezas e belezas de Esparta. O Everlest está localizada na direção sudeste da região e se trata de uma montanha de cerca de 10 mil metros acima do nível do mar, extremamente escorregadia e composta por rochas raras.'),
(13, 'Casa', 'Sua casa é o local mais seguro para você. Aqui você pode consultar seus atributos, treinos, missões e batalhas, além de se equipar com seu melhor equipamento.');

-------------------------------------------------

INSERT INTO Amigável (idNPC, NomeNPC, Descricao, TipoNPC, Fala) VALUES 
(1, 'Argus Floros', 'Criado na floresta, Argus é um grande conhecedor das plantas e de suas propriedades, além disso, sua relação com o mundo espiritual creia você ou não, tornam suas poções SURREIAS!', 'Amigável', 'Seja bem vindo a loja de poções Alquimia, nobre Guerreiro! Aqui você terá variedade de poções para comprar e utilizar em suas batalhas!'),
(2, 'Orion Katsaros', 'Orion desde pequeno ajudava seu pai na construção de armas e armaduras, por consequência, ele se tornou um armeiro excepcional. Não tenha dúvidas que ao comprar um armamento com ele você estará fazendo um ótimo negócio ', 'Amigável', 'Seja bem vindo a loja de equipamento Trezentes, nobre Guerreiro! Aqui você terá variedade de armas, das mais simples até as mais poderosas e também se equipar com uma armadura para utilizar em suas batalhas!');

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
(3,'Dormammu','Dormammu é um oponente surreal, sua técnica é fruto de um longo período de reclusão em um mosteiro, aprendendo a lutar e a blindar a sua mente de forma que NADA o abala','Inimigo', 100, 50, 12),
(4,'Carniceiro','Carniceiro ou "porcão" como muitos o chamam, é um guerreiro extremamente violento, o desejo e o prazer em matar dominaram seu coração ao ponto de ele consumir partes dos seus inimigos após matá-los','Inimigo', 10, 50,9),
(5,'Kane','Perito na arte da guerra e da caça, Kane consegue enxergar muito bem os pontos fracos de seu adversário, não o subestime','Inimigo', 20, 65, 9),
(6,'Dominador','Um bravo guerreiro que ganha muito dinheiro e fama no centro de batalha.','Inimigo', 30, 80, 9),
(7,'Tormenta','Parte do significado do seu nome vem da sua aparência horrenda, um pequeno pesadelo acordado. Mas não se preocupe, provavelmente você não terá muito tempo antes que ele te mate','Inimigo', 40, 100, 9),
(8,'Aniquilador','Conhecido em Esparta por nunca ter perdido uma batalha, seus inimigos tremem de medo ao ver o seu poderoso machado','Inimigo', 50, 150, 9),
(9,'Kretins','Classe de inimigos nivel 1, geralmente portadores de machadinha, são velozes mas não muito fortes','Inimigo', 10, 10, 7),
(10,'Kretins','Classe de inimigos nivel 1, geralmente portadores de machadinha, são velozes mas não muito fortes','Inimigo', 10, 10, 8),
(11,'Kretins','Classe de inimigos nivel 1, geralmente portadores de machadinha, são velozes mas não muito fortes','Inimigo', 10, 10, 5),
(13,'Furbos','Classe de inimigos nivel 2, utilizam uma cimitarra como arma, são mais resistentes aos ataques','Inimigo', 20, 15, 7),
(14,'Furbos','Classe de inimigos nivel 2, utilizam uma cimitarra como arma, são mais resistentes aos ataques','Inimigo', 20, 15, 8),
(15,'Furbos','Classe de inimigos nivel 2, utilizam uma cimitarra como arma, são mais resistentes aos ataques','Inimigo', 20, 15, 5),
(18,'Sicarius','Classe de inimigos nivel 3, portam um Alfange, seu ataque é potente porém são mais lentos','Inimigo', 30, 30, 7),
(19,'Sicarius','Classe de inimigos nivel 3, portam um Alfange, seu ataque é potente porém são mais lentos','Inimigo', 30, 30, 8),
(20,'Sicarius','Classe de inimigos nivel 3, portam um Alfange, seu ataque é potente porém são mais lentos','Inimigo', 30, 30, 5),
(21,'Cérberos','Um monstruoso cão de três cabeças que guarda a entrada da Caverna de Melissanthi.','Inimigo', 30, 50, 1),
(22,'Javali de Brightwood','Um monstro terrível que assola a todos que passam pela Floresta de Brightwood.','Inimigo', 25, 70, 10),
(23,'Minotauro','Uma criatura com a cabeça de um touro sobre o corpo de um homem, um dos monstro mais forte e amedrontador de Esparta.','Inimigo', 40, 70, 10),
(24,'Lobo Raivoso','Lobos são animais extremamente territorialistas, grande azar de quem ousa invadir o seu espaço','Inimigo',30, 65, 10),
(25,'Ciclope','Gigante irmotal com apenas um olho no centro da testa, eles podem ser lentos, mas tome cuidado, seu ataque é o mais poderoso de Esparta.','Inimigo',100,200,12),
(26,'Cuca','Jacaré que vive nas proximidades do Lago Prespa pronto para dar o bote em quem passar.','Inimigo', 40, 50, 11),
(27,'Wukong','O monstro mais rápido de Esparta, localizado na Floresta Amazônica, ele alcança velocidades incríveis, além de ter uma grande habilidade com seu bastão.','Inimigo', 40, 50, 2);

-------------------------------------------------

INSERT INTO Batalha (idBatalha, QtdRespeitoBat, QtdDinheiroBat, idInimigo) VALUES 
(1, 20, 50, 4),
(2, 40, 100, 5),
(3, 60, 200, 6), 
(4, 80, 400, 7),
(5, 100, 600, 8); 

-------------------------------------------------

INSERT INTO Missao(idMissao, NomeMissao, DescricaoMissao, Objetivo, Recompensa) VALUES
(1, 'Primeira Arma', 'Compre sua primeira arma!', 'Compre uma arma.', 20),
(2, 'Necessidades Básicas', 'Compre sua primeira armadura!', 'Compre uma armadura.', 20),
(3, 'Em busca da Glória Eterna!', 'Faça sua primeira batalha!', 'Batalhe uma primeira vez.', 20),
(4, 'Cheiro de carniça!', 'Derrote o Carniceiro no Centro de Batalha.', 'Derrote o Carniceiro.', 20),
(5, 'Adversário qualificado.', 'Derrote o guerreiro Kane no Centro de Batalha.', 'Derrote o guerreiro Kane.', 20),
(6, 'O Dominador', 'Derrote o mercenário Dominador no Centro de Batalha.', 'Derrote o mercenário Dominador.', 20),
(7, 'O vale da Tormenta', 'Derrote a Tormenta no Centro de Batalha.', 'Derrote a Tormenta.', 20),
(8, 'Batalha Final', 'Derrote o chefe das batalhas, o Aniquilador.', 'Derrote o Aniquilador.', 20),
(9, 'Olá, Argus Floros!', 'Visite e compre na loja de poções Trezentes.', 'Compre qualquer porção.', 20),
(10, 'Eu vim barganhar!', 'Dormammu está aterrorizando por quem passa na Floresta Everlest, os habitantes próximos já tem medo de sair de suas casas com medo deste temível monstro.', 'Derrote Dormammu na região de Everlest.', 20),
(11, 'O poder da Machadinha', 'Você acaba de encontrar um Kretins, assim como os Furbos e Sicarius, são mosntros nomâdes, a todo momento estão em lugar diferente, mas podem ser encontrados nas extremidades de Esparta, como o Oeste, Leste e Saída de Esparta.', 'Derrote o Kretins.', 20),
(12, 'O poder da Cimitarra', 'Você acaba de encontrar um Furbos, assim como os Kretins e Sicarius, são mosntros nomâdes, a todo momento estão em lugar diferente, mas podem ser encontrados nas extremidades de Esparta, como o Oeste, Leste e Saída de Esparta.', 'Derrote o Furbos.', 20),
(13, 'O poder do Alfange', 'Você acaba de encontrar um Sicarius, assim como os Furbos e Kretins, são mosntros nomâdes, a todo momento estão em lugar diferente, mas podem ser encontrados nas extremidades de Esparta, como o Oeste, Leste e Saída de Esparta.', 'Derrote o Sicarius.', 20),
(14, 'Um cachorro de três cabeças?', 'Cérberos, o guardião da Caverna de Melissanthi, ninguém nunca conseguiu saber o que de tão valioso é guardado lá, pois os que tentaram viraram comida de cachorro.', 'Derrote Cérberos e descubra o de valioso é guardado ali.', 20),
(15, 'Aquilo é um Javali?', 'Tome cuidado ao andar pela Floresta Brightwood, a qualquer momento você pode esbarrar com um Javali abominável, mas se conseguir matá-lo sua cabeça vale uma boa grana!', 'Derrote um Javali na Floresta Brightwood', 20),
(16, 'A lenda de Minotauro', 'Reza a lenda que na Floresta de Brightwood há um ser que tem o corpo humano, mas sua cabeça é de touro, e todos que o encontraram foram devorados vivos, mas uma boa arma e uma boa armadura é capaz derrotá-lo.', 'Derrote Minotauro na Floresta de Brightwood', 20),
(17, 'Cuidado com a raiva!', 'A Floresta Brightwood é o local mais perigoso de Esparta pela diversidade de monstros que tem nela, um deles é o Lobo Raivoso que sente o cheiro de qualquer um de longe e qualquer brecha ele estar pronto para atacar e caso você uma mordida, você acaba sendo contaminado pela raiva.', 'Derrote um Lobo Raivoso na Floresta de Brightwood', 20),
(18, 'O som do gigante','', 'Derrote o Gigante Ciclope na Floresta Everlest', 20),
(19, 'A velhinha com a cabeça de Jacaré', 'Cuca, domina o lago prespa, mesmo sendo uma velhinha, não subestime sua rapidez e sua mordida pode ser fatal. Mas sua carne de Jacaré é muito cara em Esparta, sendo um dos principais monstros caçados.', 'Derrote Cuca no Lago Prespa.', 20),
(20, 'Macacos me mordam', 'Os Wukongs dominaram a Floresta Amozônica, expulsando as guerreiras Amazonas que lá habitavam. Derrotando o chefe dos Wukongs, a paz pode finalmente ser reestabelecida novamente na floresta mais bela de Esparta.', 'Derrote o mestre Wukong.', 20),
(21, 'O poder da Machadinha', 'Você acaba de encontrar um Kretins, assim como os Furbos e Sicarius, são mosntros nomâdes, a todo momento estão em lugar diferente, mas podem ser encontrados nas extremidades de Esparta, como o Oeste, Leste e Saída de Esparta.', 'Derrote o Kretins.', 20),
(22, 'O poder da Cimitarra', 'Você acaba de encontrar um Furbos, assim como os Kretins e Sicarius, são mosntros nomâdes, a todo momento estão em lugar diferente, mas podem ser encontrados nas extremidades de Esparta, como o Oeste, Leste e Saída de Esparta.', 'Derrote o Furbos.', 20),
(23, 'O poder do Alfange', 'Você acaba de encontrar um Sicarius, assim como os Furbos e Kretins, são mosntros nomâdes, a todo momento estão em lugar diferente, mas podem ser encontrados nas extremidades de Esparta, como o Oeste, Leste e Saída de Esparta.', 'Derrote o Sicarius.', 20),
(24, 'O poder da Machadinha', 'Você acaba de encontrar um Kretins, assim como os Furbos e Sicarius, são mosntros nomâdes, a todo momento estão em lugar diferente, mas podem ser encontrados nas extremidades de Esparta, como o Oeste, Leste e Saída de Esparta.', 'Derrote o Kretins.', 20),
(25, 'O poder da Cimitarra', 'Você acaba de encontrar um Furbos, assim como os Kretins e Sicarius, são mosntros nomâdes, a todo momento estão em lugar diferente, mas podem ser encontrados nas extremidades de Esparta, como o Oeste, Leste e Saída de Esparta.', 'Derrote o Furbos.', 20),
(26, 'O poder do Alfange', 'Você acaba de encontrar um Sicarius, assim como os Furbos e Kretins, são mosntros nomâdes, a todo momento estão em lugar diferente, mas podem ser encontrados nas extremidades de Esparta, como o Oeste, Leste e Saída de Esparta.', 'Derrote o Sicarius.', 20);