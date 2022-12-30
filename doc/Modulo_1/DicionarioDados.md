# Dicionário de Dados

## Guerreiro

| Atributo    | Obrigatoriedade | Classe       | Domínio  | Tamanho | Descrição                                                                        | Exemplo  |
| ----------- | --------------- | ------------ | -------- | ------- | -------------------------------------------------------------------------------- | -------- |
| idGuerreiro | Obrigatorio     | Determinante | Numérico | 4       | Identificação do jogador.                                                        | 0001     |
| Nome        | Obrigatorio     | Simples      | Texto    | 20      | Nikename do jogador.                                                             | Hellenjn |
| Dinheiro    | Não obrigatorio | Simples      | Numérico | 9999    | Valores inteiros, quantidade de dinheiro que o jogador tem.                      | 120      |
| Posicao     | Obrigatorio     | Simples      | Numérico |         | Mostra a localização do jogador no mapa.                                         |          |
| Vida        | Obrigatorio     | Simples      | Numérico | 200     | Quantidade de vida que o jogador tem.                                            | 5        |
| Atributos   | Obrigatorio     | Composto     | Numérico |         | Valores inteiros, os atributos são as qualidades do jogador.                     |          |
| Forca       | Obrigatorio     | Simples      | Numérico | 100     | Valores inteiros, refere-se a quantidade do nível de força que o jogador possui. | 5        |
| Defesa      | Obrigatorio     | Simples      | Numérico | 100     | Valores inteiros, quantidade de do nível de defesa.                              | 10       |
| Respeito    | Obrigatorio     | Simples      | Numérico | 100     | Valores inteiros, quantidade do nível de respeito.                               | 2        |
| Habilidade  | Obrigatorio     | Simples      | Numérico | 100     | Valores inteiros, quantidade do nível de habilidade do jogador.                  | 24       |

## Treino

| Atributo       | Obrigatoriedade | Classe       | Domínio  | Tamanho | Descrição                                                                | Exemplo          |
| -------------- | --------------- | ------------ | -------- | ------- | ------------------------------------------------------------------------ | ---------------- |
| idTreino       | Obrigatorio     | Determinante | Numérico | 3       | Identificacao do treino.                                                 | 001              |
| TipoTreino     | Obrigatorio     | Simples      | Texto    | 15      | Força, defesa ou habilidade                                              | Treino de força. |
| ValorTreino    | Obrigatorio     | Simples      | Numérico | 50      | Valor que o jogador deve pagar para realizar o treino, valores inteiros. | 10               |
| MelhoriaTreino | Obrigatorio     | Simples      | Numérico | 20      | Quantidade de atributo ganho.                                            | 5                |

## Missão

| Atributo        | Obrigatoriedade | Classe       | Domínio  | Tamanho | Descrição                                              | Exemplo                                                                                                                         |
| --------------- | --------------- | ------------ | -------- | ------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| idMissao        | Obrigatorio     | Determinante | Numérico | 3       | Identificação da missão.                               | 001                                                                                                                             |
| nomeMissao      | Obrigatorio     | Simples      | Texto    | 50      | Nome dado a missão                                     | Em busca de ouro.                                                                                                               |
| DescricaoMissao | Obrigatorio     | Simples      | Texto    | 300     | Contextualização da missão                             | Certa noite a cidade foi atacada por inimigos, eles se encontram na floresta agora. A população está revoltada e pede vingança. |
| Objetivo        | Obrigatorio     | Simples      | Texto    | 150     | Descrição de forma direta                              | Vá até a floresta e mate os inimigos.                                                                                           |
| Recompensa      | Obrigatorio     | Simples      | Numérico | 50      | Valores inteiros, valor a receber ao finalizar missão. | 10                                                                                                                              |

## Batalha

| Atributo       | Obrigatoriedade | Classe       | Domínio  | Tamanho | Descrição                                               | Exemplo |
| -------------- | --------------- | ------------ | -------- | ------- | ------------------------------------------------------- | ------- |
| idBatalha      | Obrigatorio     | Determinante | Numérico | 3       | Identificação da batalha.                               | 001     |
| qntRespeitoBat | Obrigatorio     | Simples      | Numérico | 10      | Valores inteiros, valor de respeito que deve ser ganho. | 7       |
| qntDinheiroBat | Obrigatorio     | Simples      | Numérico | 10      | Valores inteiros, quantidade de moedas recebidas.       | 10      |

## Item

| Atributo   | Obrigatoriedade | Classe       | Domínio  | Tamanho | Descrição                                 | Exemplo |
| ---------- | --------------- | ------------ | -------- | ------- | ----------------------------------------- | ------- |
| idItem     | Obrigatorio     | Determinante | Numérico | 3       | Identificação do item.                    | 001     |
| ValorItem  | Obrigatorio     | Simples      | Numérico | 500     | Valores inteiros, custo do item.          | 70      |
| TipoItem   | Obrigatorio     | Simples      | Texto    | 15      | Equipamento ou poção.                     | Poção.  |
| Quantidade | Obrigatorio     | Simples      | Numérico | 50      | Valores inteiros, quantidade de melhoria. | 25      |

## Loja

| Atributo   | Obrigatoriedade | Classe       | Domínio  | Tamanho | Descrição                                 | Exemplo |
| ---------- | --------------- | ------------ | -------- | ------- | ----------------------------------------- | ------- |
| idLoja     | Obrigatorio     | Determinante | Numérico | 3       | Identificação da Loja.                    | 01      |
| Nome       | Obrigatorio     | Simples      | Texto    | 20      | Nome da Loja                              | Lojinha Bom Preço|
| Descrição  | Obrigatorio     | Simples      | Texto    | 300     | Equipamento ou poção.                     | Essa é uma loja de armas milenares...  |

## Equipamento

| Atributo  | Obrigatoriedade | Classe  | Domínio | Tamanho | Descrição        | Exemplo |
| --------- | --------------- | ------- | ------- | ------- | ---------------- | ------- |
| TipoEquip | Obrigatorio     | Simples | Texto   | 10      | Arma ou armadura | Arma.   |

## Poção

| Atributo | Obrigatoriedade | Classe  | Domínio  | Tamanho | Descrição                             | Exemplo |
| -------- | --------------- | ------- | -------- | ------- | ------------------------------------- | ------- |
| tipoPoc  | Obrigatorio     | Simples | Texto    | 15      | Força, defesa, respeito ou habilidade | Defesa. |
| qntPoc   | Obrigatorio     | Simples | Numérico | 50      | Quantidade de atributo a ser ganho    | 20      |

## Armadura

| Atributo     | Obrigatoriedade | Classe  | Domínio  | Tamanho | Descrição                                            | Exemplo   |
| ------------ | --------------- | ------- | -------- | ------- | ---------------------------------------------------- | --------- |
| TipoArmadura | Obrigatorio     | Simples | Texto    | 15      | Tipo de armadura que o jogador deseja comprar/ usar. | Peitoral. |
| Resistencia  | Obrigatorio     | Simples | Numérico | 50      | Capacidade de dano que a armadura consegue resistir. | 30        |

## Arma

| Atributo | Obrigatoriedade | Classe  | Domínio  | Tamanho | Descrição                                        | Exemplo |
| -------- | --------------- | ------- | -------- | ------- | ------------------------------------------------ | ------- |
| TipoArma | Obrigatorio     | Simples | Texto    | 15      | Tipo de arma que o jogador deseja comprar/ usar. | Espada. |
| Potencia | Obrigatorio     | Simples | Numérico | 50      | Valores inteiros, capacidade de dano da arma.    | 30      |

## Lugar

| Atributo       | Obrigatoriedade | Classe       | Domínio  | Tamanho | Descrição                               | Exemplo                                                                                                                                                                                                                       |
| -------------- | --------------- | ------------ | -------- | ------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idLugar        | Obrigatorio     | Determinante | Numérico | 2       | Identificação do lugar.                 | 01                                                                                                                                                                                                                            |
| nomeLugar      | Obrigatorio     | Simples      | Texto    | 20      | Apelido do lugar.                       | Floresta.                                                                                                                                                                                                                     |
| Coordenadas    | Obrigatorio     | Simples      | Numérico |         |                                         |                                                                                                                                                                                                                               |
| DescricaoLugar | Obrigatorio     | Simples      | Texto    | 300     | Descreve o lugar.                       | A praça principal era composta de varias lojas de comercio, que aparentavam ser construidas por aquitetos muito experientes. Havia uma pequena casa no qual era possivel realizar compras de poções por um preço mais barato. |
| DonoLugar      | Não Obrigatorio | Simples      | Texto    | 20      | Nome do personagem que é dono do lugar. | José Aquiles.                                                                                                                                                                                                                 |

## NPC

| Atributo         | Obrigatoriedade | Classe       | Domínio  | Tamanho | Descrição                               | Exemplo                        |
| ---------------- | --------------- | ------------ | -------- | ------- | ----------------------------------------|--------------------------------|
| idNPC            | Obrigatorio     | Determinante | Numérico | 2       | Identificação do inimigo.               | 02                             |
| NomeNPC          | Obrigatorio     | Simples      | Texto    | 20      | Nome do inimigo.                        | Damon                          |
| Descricao        | Obrigatorio     | Simples      | Texto    | 300     | Descreve as caracteristicas do NPC.     | Esse NPC cuida da floresta     |
| TipoNPC          | Obrigatorio     | Simples      | Texto    | 20      | Dano que o inimigo causa ao jogador.    | 25                             |
| idLugar          | Obrigatorio     | Simples      | Numérico | 2       | Quantidade de vida do inimigo.          | 170                            |

## Inimigo

| Atributo         | Obrigatoriedade | Classe       | Domínio  | Tamanho | Descrição                               | Exemplo                        |
| ---------------- | --------------- | ------------ | -------- | ------- | ----------------------------------------|--------------------------------|
| idNPC            | Obrigatorio     | Determinante | Numérico | 2       | Identificação do inimigo.               | 02                             |
| Dano             | Obrigatorio     | Simples      | Numérico | 50      | Valores inteiros, capacidade de dano    | 30                             |
| Vida             | Obrigatorio     | Simples      | Numérico | 200     | Quantidade de vida do inimigo           | 5                              |
| NPC              | Obrigatorio     | Simples      | Numérico | 2       | Id do NPC                               | 02                             |

## Amigável

| Atributo         | Obrigatoriedade | Classe       | Domínio  | Tamanho | Descrição                               | Exemplo                        |
| ---------------- | --------------- | ------------ | -------- | ------- | ----------------------------------------|--------------------------------|
| idNPC            | Obrigatorio     | Determinante | Numérico | 2       | Identificação do inimigo.               | 02                             |
| Falas            | Obrigatorio     | Simples      | Texto    | 300     | Nome do inimigo.                        | Olá, seja bem vindo            |
| NPC              | Obrigatorio     | Simples      | Numérico | 2       | Id do NPC                               | 02                             |
