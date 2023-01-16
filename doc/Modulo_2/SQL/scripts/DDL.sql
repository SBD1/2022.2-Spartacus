-- Scripts CREATE TABLE: TABELAS CRIADAS PARA O BANCO DE DADOS "Spartacus" ----
-- AO TOTAL, SÃO 18 TABELAS --

-- CREATE DATABASE IF NOT EXISTS Spartacus;

CREATE TABLE IF NOT EXISTS NPC
(
    idNPC serial NOT NULL,
    NomeNPC varchar(30) NOT NULL,
    Descricao varchar(300),
    TipoNPC varchar(10) NOT NULL,
    CONSTRAINT NPC_pkey PRIMARY KEY (idNPC)
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Lugar
(
    idLugar serial NOT NULL,
    NomeLugar varchar(30)  NOT NULL,
    DescricaoLugar varchar(500)  NOT NULL,
    CONSTRAINT Lugar_pkey PRIMARY KEY (idLugar)
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Item
(
    idItem serial NOT NULL,
    Quantidade integer NOT NULL, 
    ValorItem integer NOT NULL,
    TipoItem varchar(15) NOT NULL,
    CONSTRAINT Item_pkey PRIMARY KEY (idItem)
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Amigável
(
    Fala varchar(300)  NOT NULL,
    CONSTRAINT Amigável_pkey PRIMARY KEY (idNPC)
)
    INHERITS (NPC);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Arma
(
    TipoArma varchar(30)  NOT NULL,
    Potencia integer NOT NULL,
    CONSTRAINT Arma_pkey PRIMARY KEY (idItem)
)
    INHERITS (Item);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Armadura
(
    TipoArmadura varchar(30) NOT NULL,
    Resistencia integer NOT NULL,
    CONSTRAINT Armadura_pkey PRIMARY KEY (idItem)
)
    INHERITS (Item);
    
--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Poção
(
    TipoPoc varchar(25)  NOT NULL,
    QtdPoc integer NOT NULL,
    CONSTRAINT Poção_pkey PRIMARY KEY (idItem)
)
    INHERITS (Item);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Guerreiro
(
    idGuerreiro serial NOT NULL,
    Nome varchar(30)  NOT NULL,
    Dinheiro integer NOT NULL DEFAULT 100,
    Vida integer NOT NULL DEFAULT 100,
    Forca integer NOT NULL DEFAULT 0,
    Defesa integer NOT NULL DEFAULT 0,
    Respeito integer NOT NULL DEFAULT 0,
    Habilidade integer NOT NULL DEFAULT 0,
    idLugar integer NOT NULL DEFAULT 4,
    CONSTRAINT Guerreiro_pkey PRIMARY KEY (idGuerreiro),
    CONSTRAINT idLugar_fk FOREIGN KEY (idLugar)
        REFERENCES Lugar (idLugar) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
        NOT VALID
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Loja
(
    idLoja serial NOT NULL,
    Nome varchar(15)  NOT NULL,
    Descricao varchar(300)  NOT NULL,
    idAmigavel integer NOT NULL,
    idLugar integer NOT NULL,
    CONSTRAINT Loja_pkey PRIMARY KEY (idLoja),
    CONSTRAINT idAmigavel_fk FOREIGN KEY (idAmigavel)
        REFERENCES Amigável (idNPC) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
        NOT VALID,
    CONSTRAINT idLugar_fk FOREIGN KEY (idLugar)
        REFERENCES Lugar (idLugar) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Inimigo
(
    Dano integer NOT NULL,
    Vida integer NOT NULL,
    idLugar integer NOT NULL,
    CONSTRAINT Inimigo_pkey PRIMARY KEY (idNPC),
    CONSTRAINT idLugar_fk FOREIGN KEY (idLugar)
        REFERENCES Lugar (idLugar) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
        NOT VALID
)
    INHERITS (NPC);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Instancia_de_Inimigo
(
    idInstancia serial NOT NULL,
    idInimigo integer NOT NULL,
    idGuerreiro integer NOT NULL,
    CONSTRAINT Instancia_de_Inimigo_pkey PRIMARY KEY (idInstancia),
    CONSTRAINT idGuerreiro_fk FOREIGN KEY (idGuerreiro)
        REFERENCES Guerreiro (idGuerreiro) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
        NOT VALID,
    CONSTRAINT idInimigo_fk FOREIGN KEY (idInimigo)
        REFERENCES Inimigo (idNPC) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Batalha
(
    idBatalha serial NOT NULL,
    QtdRespeitoBat integer NOT NULL,
    QtdDinheiroBat integer NOT NULL,
    idInimigo integer NOT NULL,
    CONSTRAINT Batalha_pkey PRIMARY KEY (idBatalha),
    CONSTRAINT idInimigo_fk FOREIGN KEY (idInimigo)
        REFERENCES Inimigo (idNPC) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Instancia_de_Batalha
(
    idInstancia serial NOT NULL,
    idBatalha integer NOT NULL,
    idInstInimigo integer NOT NULL,
    idGuerreiro integer NOT NULL,
    CONSTRAINT Instancia_de_Batalha_pkey PRIMARY KEY (idInstancia),
    CONSTRAINT idBatalha_fk FOREIGN KEY (idBatalha)
        REFERENCES Batalha (idBatalha) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT idGuerreiro_fk FOREIGN KEY (idGuerreiro)
        REFERENCES Guerreiro (idGuerreiro) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT idInstInimigo_fk FOREIGN KEY (idInstInimigo)
        REFERENCES Instancia_de_Inimigo (idInstancia) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Instancia_de_Item
(
    idInstancia serial NOT NULL,
    idItem integer NOT NULL,
    idGuerreiro integer NOT NULL,
    idLugar integer,
    idLoja integer,
    CONSTRAINT Instancia_de_Item_pkey PRIMARY KEY (idInstancia),
    CONSTRAINT idGuerreiro_fk FOREIGN KEY (idGuerreiro)
        REFERENCES Guerreiro (idGuerreiro) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT idItem_fk FOREIGN KEY (idItem)
        REFERENCES Item (idItem) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT idLoja_fk FOREIGN KEY (idLoja)
        REFERENCES Loja (idLoja) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT idLugar_fk FOREIGN KEY (idLugar)
        REFERENCES Lugar (idLugar) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Missao
(
    idMissao serial NOT NULL,
    NomeMissao varchar(50)  NOT NULL,
    DescricaoMissao varchar(300)  NOT NULL,
    Objetivo varchar(150)  NOT NULL,
    Recompensa integer NOT NULL,
    CONSTRAINT Missao_pkey PRIMARY KEY (idMissao)
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Instancia_de_Missao
(
    idInstancia serial NOT NULL,
    idMissao integer NOT NULL,
    idAmigavel integer NOT NULL,
    idInimigo integer NOT NULL,
    idGuerreiro integer NOT NULL,
    CONSTRAINT Instancia_de_Missao_pkey PRIMARY KEY (idInstancia),
    CONSTRAINT idAmigavel_fk FOREIGN KEY (idAmigavel)
        REFERENCES Amigável (idNPC) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT idGuerreiro_fk FOREIGN KEY (idGuerreiro)
        REFERENCES Guerreiro (idGuerreiro) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT idInimigo_fk FOREIGN KEY (idInimigo)
        REFERENCES Inimigo (idNPC) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT idMissao_fk FOREIGN KEY (idMissao)
        REFERENCES Missao (idMissao) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Treino
(
    idTreino serial NOT NULL,
    TipoTreino varchar(30)  NOT NULL,
    ValorTreino integer NOT NULL,
    MelhoriaTreino integer NOT NULL,
    CONSTRAINT Treino_pkey PRIMARY KEY (idTreino)
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Instancia_de_Treino
(
    idInstancia serial NOT NULL,
    idTreino integer NOT NULL,
    idGuerreiro integer NOT NULL,
    CONSTRAINT Instancia_de_Treino_pkey PRIMARY KEY (idInstancia),
    CONSTRAINT idGuerreiro_fk FOREIGN KEY (idGuerreiro)
        REFERENCES Guerreiro (idGuerreiro) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT idTreino_fk FOREIGN KEY (idTreino)
        REFERENCES Treino (idTreino) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------