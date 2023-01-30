-- TRIGGERS DE GENERALIZAÇÃO/ESPECIALIZAÇÃO PARA OS ITENS

CREATE OR REPLACE FUNCTION check_item_arma_armadura() RETURNS TRIGGER AS $check_item_arma_armadura$
BEGIN
    PERFORM * FROM arma WHERE tipoarma = NEW.tipoarmadura;
    IF FOUND THEN 
		RAISE EXCEPTION 'Este item já se encontra na tabela arma';
    END IF;
    RETURN NEW;

END;
$check_item_arma_armadura$ LANGUAGE plpgsql;

CREATE TRIGGER check_item_arma_armadura
BEFORE UPDATE OR INSERT ON armadura
FOR EACH ROW EXECUTE PROCEDURE check_item_arma_armadura();

----------------------------

CREATE OR REPLACE FUNCTION check_item_arma_pocao() RETURNS TRIGGER AS $check_item_arma_pocao$
BEGIN
    PERFORM * FROM arma WHERE tipoarma = NEW.tipopoc;
    IF FOUND THEN 
		RAISE EXCEPTION 'Este item já se encontra na tabela arma';
    END IF;
    RETURN NEW;

END;
$check_item_arma_pocao$ LANGUAGE plpgsql;

CREATE TRIGGER check_item_arma_pocao
BEFORE UPDATE OR INSERT ON poção
FOR EACH ROW EXECUTE PROCEDURE check_item_arma_pocao();

----------------------------

CREATE OR REPLACE FUNCTION check_item_armadura_arma() RETURNS TRIGGER AS $check_item_armadura_arma$
BEGIN
    PERFORM * FROM armadura WHERE tipoarmadura = NEW.tipoarma;
    IF FOUND THEN 
		RAISE EXCEPTION 'Este item já se encontra na tabela armadura';
    END IF;
    RETURN NEW;

END;
$check_item_armadura_arma$ LANGUAGE plpgsql;

CREATE TRIGGER check_item_armadura_arma
BEFORE UPDATE OR INSERT ON arma
FOR EACH ROW EXECUTE PROCEDURE check_item_armadura_arma();

----------------------------

CREATE OR REPLACE FUNCTION check_item_armadura_pocao() RETURNS TRIGGER AS $check_item_armadura_pocao$
BEGIN
    PERFORM * FROM armadura WHERE tipoarmadura = NEW.tipopoc;
    IF FOUND THEN 
		RAISE EXCEPTION 'Este item já se encontra na tabela armadura';
    END IF;
    RETURN NEW;

END;
$check_item_armadura_pocao$ LANGUAGE plpgsql;

CREATE TRIGGER check_item_armadura_pocao
BEFORE UPDATE OR INSERT ON poção
FOR EACH ROW EXECUTE PROCEDURE check_item_armadura_pocao();

----------------------------

CREATE OR REPLACE FUNCTION check_item_pocao_arma() RETURNS TRIGGER AS $check_item_pocao_arma$
BEGIN
    PERFORM * FROM poção WHERE tipopoc = NEW.tipoarma;
    IF FOUND THEN 
		RAISE EXCEPTION 'Este item já se encontra na tabela poção';
    END IF;
    RETURN NEW;

END;
$check_item_pocao_arma$ LANGUAGE plpgsql;

CREATE TRIGGER check_item_pocao_arma
BEFORE UPDATE OR INSERT ON arma
FOR EACH ROW EXECUTE PROCEDURE check_item_pocao_arma();

----------------------------

CREATE OR REPLACE FUNCTION check_item_pocao_armadura() RETURNS TRIGGER AS $check_item_pocao_armadura$
BEGIN
    PERFORM * FROM poção WHERE tipopoc = NEW.tipoarmadura;
    IF FOUND THEN 
		RAISE EXCEPTION 'Este item já se encontra na tabela poção';
    END IF;
    RETURN NEW;

END;
$check_item_pocao_armadura$ LANGUAGE plpgsql;

CREATE TRIGGER check_item_pocao_armadura
BEFORE UPDATE OR INSERT ON armadura
FOR EACH ROW EXECUTE PROCEDURE check_item_pocao_armadura();



----------------------------------------------------------------------------------------



-- TRIGGERS DE GENERALIZAÇÃO/ESPECIALIZAÇÃO PARA OS NPC'S

CREATE OR REPLACE FUNCTION check_npc_amigavel() RETURNS TRIGGER AS $check_npc_amigavel$
BEGIN
    PERFORM * FROM amigável WHERE nomenpc = NEW.nomenpc;
    IF FOUND THEN 
		RAISE EXCEPTION 'Este NPC já se encontra na tabela amigável';
    END IF;
    RETURN NEW;

END;
$check_npc_amigavel$ LANGUAGE plpgsql;

CREATE TRIGGER check_npc_amigavel
BEFORE UPDATE OR INSERT ON inimigo
FOR EACH ROW EXECUTE PROCEDURE check_npc_amigavel();

----------------------------

CREATE OR REPLACE FUNCTION check_npc_inimigo() RETURNS TRIGGER AS $check_npc_inimigo$
BEGIN
    PERFORM * FROM inimigo WHERE nomenpc = NEW.nomenpc;
    IF FOUND THEN 
		RAISE EXCEPTION 'Este NPC já se encontra na tabela inimigo';
    END IF;
    RETURN NEW;

END;
$check_npc_inimigo$ LANGUAGE plpgsql;

CREATE TRIGGER check_npc_inimigo
BEFORE UPDATE OR INSERT ON amigável
FOR EACH ROW EXECUTE PROCEDURE check_npc_inimigo();



----------------------------------------------------------------------------------------



-- TRIGGER PARA VERIFICAR SE O GUERREIRO MORREU

-- CREATE OR REPLACE FUNCTION update_vida_guerreiro() RETURNS trigger AS $update_vida_guerreiro$
-- BEGIN
--     SELECT vida FROM guerreiro 

--     IF (vida <= 0) THEN
--          RAISE NOTICE 'Você morreu! Sua vida foi restaurada para 100 novamente.';
--     END IF;
--     RETURN NULL;
-- END;
-- $update_vida_guerreiro$ LANGUAGE plpgsql;

-- CREATE TRIGGER update_vida_guerreiro
-- AFTER UPDATE ON guerreiro
-- FOR EACH ROW EXECUTE PROCEDURE update_vida_guerreiro();