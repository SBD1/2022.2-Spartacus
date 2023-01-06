-- Scripts CREATE TABLE: TABELAS CRIADAS PARA O BANCO DE DADOS "Spartacus" ----
-- AO TOTAL, SÃO 18 TABELAS --

CREATE TABLE IF NOT EXISTS public."NPC"
(
    "idNPC" integer NOT NULL DEFAULT nextval('"NPC_idNPC_seq"'::regclass),
    "NomeNPC" character varying(30) COLLATE pg_catalog."default" NOT NULL,
    "Descricao" character varying(300) COLLATE pg_catalog."default",
    "TipoNPC" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "NPC_pkey" PRIMARY KEY ("idNPC")
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Item"
(
    "idItem" integer NOT NULL DEFAULT nextval('"Item_idItem_seq"'::regclass),
    "Quantidade" integer NOT NULL,
    "ValorItem" integer NOT NULL,
    "TipoItem" character varying(15) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Item_pkey" PRIMARY KEY ("idItem")
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Amigável"
(
    "Fala" character varying(300) COLLATE pg_catalog."default" NOT NULL,
    "idLoja" integer NOT NULL,
    CONSTRAINT "Amigável_pkey" PRIMARY KEY ("idNPC"),
    CONSTRAINT "idLoja_fk" FOREIGN KEY ("idLoja")
        REFERENCES public."Loja" ("idLoja") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
        NOT VALID
)
    INHERITS (public."NPC");

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Arma"
(
    "TipoArma" character varying(30) COLLATE pg_catalog."default" NOT NULL,
    "Potencia" integer NOT NULL,
    CONSTRAINT "Arma_pkey" PRIMARY KEY ("idItem")
)
    INHERITS (public."Item");

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Armadura"
(
    "TipoArmadura" character varying(30) COLLATE pg_catalog."default" NOT NULL,
    "Resistencia" integer NOT NULL,
    CONSTRAINT "Armadura_pkey" PRIMARY KEY ("idItem")
)
    INHERITS (public."Item");

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Batalha"
(
    "idBatalha" integer NOT NULL DEFAULT nextval('"Batalha_idBatalha_seq"'::regclass),
    "QtdRespeitoBat" integer NOT NULL,
    "QtdDinheiroBat" integer NOT NULL,
    CONSTRAINT "Batalha_pkey" PRIMARY KEY ("idBatalha")
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Guerreiro"
(
    "idGuerreiro" integer NOT NULL DEFAULT nextval('"Guerreiro_idGuerreiro_seq"'::regclass),
    "Nome" character varying(30) COLLATE pg_catalog."default" NOT NULL,
    "Dinheiro" integer NOT NULL,
    "Vida" integer NOT NULL,
    "Forca" integer NOT NULL,
    "Defesa" integer NOT NULL,
    "Respeito" integer NOT NULL,
    "Habilidade" integer NOT NULL,
    "idLugar" integer NOT NULL,
    CONSTRAINT "Guerreiro_pkey" PRIMARY KEY ("idGuerreiro"),
    CONSTRAINT "idLugar_fk" FOREIGN KEY ("idLugar")
        REFERENCES public."Lugar" ("idLugar") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
        NOT VALID
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Inimigo"
(
    "Dano" integer NOT NULL,
    "Vida" integer NOT NULL,
    "idLugar" integer NOT NULL,
    CONSTRAINT "Inimigo_pkey" PRIMARY KEY ("idNPC"),
    CONSTRAINT "idLugar_fk" FOREIGN KEY ("idLugar")
        REFERENCES public."Lugar" ("idLugar") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
        NOT VALID
)
    INHERITS (public."NPC");

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Instância de Batalha"
(
    "idInstancia" integer NOT NULL DEFAULT nextval('"Instância de Batalha_idInstancia_seq"'::regclass),
    "idBatalha" integer NOT NULL,
    "idInstInimigo" integer NOT NULL,
    "idGuerreiro" integer NOT NULL,
    CONSTRAINT "Instância de Batalha_pkey" PRIMARY KEY ("idInstancia"),
    CONSTRAINT "idBatalha_fk" FOREIGN KEY ("idBatalha")
        REFERENCES public."Batalha" ("idBatalha") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT "idGuerreiro_fk" FOREIGN KEY ("idGuerreiro")
        REFERENCES public."Guerreiro" ("idGuerreiro") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT "idInstInimigo_fk" FOREIGN KEY ("idInstInimigo")
        REFERENCES public."Instância de Inimigo" ("idInstancia") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Instância de Inimigo"
(
    "idInstancia" integer NOT NULL DEFAULT nextval('"Instância de Inimigo_idInstancia_seq"'::regclass),
    "idInimigo" integer NOT NULL,
    "idGuerreiro" integer NOT NULL,
    CONSTRAINT "Instância de Inimigo_pkey" PRIMARY KEY ("idInstancia"),
    CONSTRAINT "idGuerreiro_fk" FOREIGN KEY ("idGuerreiro")
        REFERENCES public."Guerreiro" ("idGuerreiro") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
        NOT VALID,
    CONSTRAINT "idInimigo_fk" FOREIGN KEY ("idInimigo")
        REFERENCES public."Inimigo" ("idNPC") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Instância de Item"
(
    "idInstancia" integer NOT NULL DEFAULT nextval('"Instância de Item_idInstancia_seq"'::regclass),
    "idItem" integer NOT NULL,
    "idGuerreiro" integer NOT NULL,
    "idLugar" integer,
    "idLoja" integer,
    CONSTRAINT "Instância de Item_pkey" PRIMARY KEY ("idInstancia"),
    CONSTRAINT "idGuerreiro_fk" FOREIGN KEY ("idGuerreiro")
        REFERENCES public."Guerreiro" ("idGuerreiro") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT "idItem_fk" FOREIGN KEY ("idItem")
        REFERENCES public."Item" ("idItem") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT "idLoja_fk" FOREIGN KEY ("idLoja")
        REFERENCES public."Loja" ("idLoja") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT "idLugar_fk" FOREIGN KEY ("idLugar")
        REFERENCES public."Lugar" ("idLugar") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Instância de Missão"
(
    "idInstancia" integer NOT NULL DEFAULT nextval('"Instância de Missão_idInstancia_seq"'::regclass),
    "idMissao" integer NOT NULL,
    "idAmigavel" integer NOT NULL,
    "idInimigo" integer NOT NULL,
    "idGuerreiro" integer NOT NULL,
    CONSTRAINT "Instância de Missão_pkey" PRIMARY KEY ("idInstancia"),
    CONSTRAINT "idAmigavel_fk" FOREIGN KEY ("idAmigavel")
        REFERENCES public."Amigável" ("idNPC") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT "idGuerreiro_fk" FOREIGN KEY ("idGuerreiro")
        REFERENCES public."Guerreiro" ("idGuerreiro") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT "idInimigo_fk" FOREIGN KEY ("idInimigo")
        REFERENCES public."Inimigo" ("idNPC") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT "idMissao_fk" FOREIGN KEY ("idMissao")
        REFERENCES public."Missao" ("idMissao") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Instância de Treino"
(
    "idTreino" integer NOT NULL,
    "idGuerreiro" integer NOT NULL,
    "idInstancia" integer NOT NULL DEFAULT nextval('"Instância de Treino_idInstancia_seq"'::regclass),
    CONSTRAINT "Instância de Treino_pkey" PRIMARY KEY ("idInstancia"),
    CONSTRAINT "idGuerreiro_fk" FOREIGN KEY ("idGuerreiro")
        REFERENCES public."Guerreiro" ("idGuerreiro") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED,
    CONSTRAINT "idTreino_fk" FOREIGN KEY ("idTreino")
        REFERENCES public."Treino" ("idTreino") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Loja"
(
    "idLoja" integer NOT NULL DEFAULT nextval('"Loja_idLoja_seq"'::regclass),
    "Nome" character varying(15) COLLATE pg_catalog."default" NOT NULL,
    "Descricao" character varying(300) COLLATE pg_catalog."default" NOT NULL,
    "idAmigavel" integer NOT NULL,
    "idLugar" integer NOT NULL,
    CONSTRAINT "Loja_pkey" PRIMARY KEY ("idLoja"),
    CONSTRAINT "idAmigavel_fk" FOREIGN KEY ("idAmigavel")
        REFERENCES public."Amigável" ("idNPC") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
        NOT VALID,
    CONSTRAINT "idLugar_fk" FOREIGN KEY ("idLugar")
        REFERENCES public."Lugar" ("idLugar") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        DEFERRABLE INITIALLY DEFERRED
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Lugar"
(
    "idLugar" integer NOT NULL DEFAULT nextval('"Lugar_idLugar_seq"'::regclass),
    "NomeLugar" character varying(30) COLLATE pg_catalog."default" NOT NULL,
    "DescricaoLugar" character varying(500) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Lugar_pkey" PRIMARY KEY ("idLugar")
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Missao"
(
    "idMissao" integer NOT NULL DEFAULT nextval('"Missao_idMissao_seq"'::regclass),
    "NomeMissao" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "DescricaoMissao" character varying(300) COLLATE pg_catalog."default" NOT NULL,
    "Objetivo" character varying(150) COLLATE pg_catalog."default" NOT NULL,
    "Recompensa" integer NOT NULL,
    CONSTRAINT "Missao_pkey" PRIMARY KEY ("idMissao")
);

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Poção"
(
    -- Inherited from table public."Item": "idItem" integer NOT NULL DEFAULT nextval('"Item_idItem_seq"'::regclass),
    -- Inherited from table public."Item": "Quantidade" integer NOT NULL,
    -- Inherited from table public."Item": "ValorItem" integer NOT NULL,
    -- Inherited from table public."Item": "TipoItem" character varying(15) COLLATE pg_catalog."default" NOT NULL,
    "TipoPoc" character varying COLLATE pg_catalog."default" NOT NULL,
    "QtdPoc" integer NOT NULL,
    CONSTRAINT "Poção_pkey" PRIMARY KEY ("idItem")
)
    INHERITS (public."Item");

--------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public."Treino"
(
    "idTreino" integer NOT NULL DEFAULT nextval('"Treino_idTreino_seq"'::regclass),
    "TipoTreino" character varying(15) COLLATE pg_catalog."default" NOT NULL,
    "ValorTreino" integer NOT NULL,
    "MelhoriaTreino" integer NOT NULL,
    CONSTRAINT "Treino_pkey" PRIMARY KEY ("idTreino")
);

--------------------------------------------------------------------------