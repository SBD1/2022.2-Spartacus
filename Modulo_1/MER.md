## Histórico de revisão

|26/07/2022|0.1|Primeira versão do MER|

# Modelo Entidade-Relacionamento

## Entidades

- **Arma**
- **Armadura**
- **Batalha**
- **Equipamento**
- **Guerreiro**
- **Inimigo**
- **Item**
- **Lugar**
- **Missão**
- **Poção**
- **Treino**

## Atributos

- **Arma:**TipoArma, Potencia.
- **Armadura:**TipoArmadura, Resistencia.
- **Batalha:** <ins>idBatalha</ins>, qtdRespeitoBat, qtdDinheiroBat.
- **Equipamento:** TipoEquip.
- **Guerreiro:** <ins>idGuerreiro</ins>, Nome, Dinheiro, Posicao, Vida, Forca, Defesa, Respeito, Habilidade.
- **Inimigo:** <ins>idInimigo</ins>,NomeInimigo, DescricaoInimigo, Dano, Vida.
- **Item:** <ins>idItem</ins>, Quantidade, ValorItem, tipoItem.
- **Lugar:** <ins>id_Lugar</ins>,NomeLugar, Coordenadas, DescricaoLugar, DonoLugar.
- **Missão:** <ins>id_missao</ins>,nomeMissao, DescricaoMissao, Objetivo, Recompensa.
- **Poção:** TipoPoc, qtdPoc.
- **Treino:** <ins>idTreino</ins>, TipoTreino, ValorTreino, MelhoriaTreino.

## Relacionamentos

**Guerreiro *Ataca* Inimigo**

- Guerreiro pode atacar *um* ou *muitos* inimigos **(1,N)**
- Inimigo ataca *um* ou *muitos* Guerreiros **(1,N)**

**Guerreiro *Faz* Treino**

- Guerreiro faz *nenhum* ou *muitos* treinos **(0,N)**
- Um treino é feito por nenhum ou muitos guerreiros **(0,N)**

**Guerreiro *Recebe* Missao**

- Um Guerreiro recebe nenhuma ou muitas missoes **(0,N)**
- Uma missao é recebida por nenhum ou muitos guerreiros **(0,N)**

**Guerreiro *Batalha* Batalha**

- Um Guerreiro batalha nenhuma ou muitas batalhas **(0,N)**
- Uma batalha é batalhada por nenhum ou muitos guerreiros **(0,N)**

**Guerreiro *Obtém* Item**

- Um Guerreiro obtém nenhum ou muitos itens **(0,N)**
- Um item é obtido por nenhum ou muitos guerreiros **(0,N)**

**Lugar *Contém* Guerreiro**

- Um Lugar contem nenhum ou muitos Guerreiros **(0,N)**
- Um Guerreiro está contido em um Lugar **(1,1)**

**Lugar *Contém* Inimigo**

- Um Lugar contém nenhum ou muitos Inimigos **(0,N)**
- Um Inimigo está contido em um Lugar **(1,1)**

**Lugar *Contém* Item**

- Um Lugar contém nenhum ou muitos Itens **(0,N)**
- Um Item está contido em um Lugar ou muitos **(1,N)**

**Batalha *Contém* Inimigo**

- Uma Batalha contém um inimigo **(1,1)**
- Um Inimigo está contido em nenhuma ou uma batalha **(0,1)**

**Missao *Contém* Inimigo**

- Uma Missao contém um Inimigo **(1,1)**
- Um inimigo está contido em uma missao **(1,1)**
