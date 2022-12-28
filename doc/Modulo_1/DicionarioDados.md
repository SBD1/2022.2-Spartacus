# Dicionário de Dados
## Guerreiro
| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| idGuerreiro | Determinante | Numérico |  |  |
| Nome | Simples | Texto | 20 |  |
| Dinheiro | Simples | Numérico |  | Valores inteiros |
| Posicao | Simples | Numérico |  |  | 
| Vida | Simples | Numérico |  |  |
| Atributos | Composto | Numérico |  | Valores inteiros |
| Forca | Simples | Numérico |  | Valores inteiros |
| Defesa | Simples | Numérico |  | Valores inteiros |
| Respeito | Simples | Numérico |  | Valores inteiros |
| Habilidade | Simples | Numérico |  | Valores inteiros |

## Treino

| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| idTreino | Determinante | Numérico |  |  |
| TipoTreino | Simples | Texto | 15 | Força, defesa ou habilidade |
| ValorTreino | Simples | Numérico |  | Valor a ser pago; valores inteiros |
| MelhoriaTreino | Simples | Numérico |  | Quantidade de atributo ganho |

## Missão

| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| idMissao | Determinante | Numérico |  |  |
| nomeMissao | Simples | Texto | 50 |  |
| DescricaoMissao | Simples | Texto | 300 | Contextualização da missão |
| Objetivo | Simples | Texto | 150 | Descrita de forma direta |
| Recompensa | Simples | Numérico |  | Valores inteiros |

## Batalha

| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| idBatalha | Determinante | Numérico |  |  |
| qntRespeitoBat | Simples | Numérico |  | Valores inteiros |
| qntDinheiroBat | Simples | Numérico |  | Valores inteiros |

## Item

| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| idItem | Determinante | Numérico |  |  |
| ValorItem | Simples | Numérico |  | Valores inteiros |
| TipoItem | Simples | Texto | 15 | Equipamento ou poção |
| Quantidade | Simples | Numérico |  | Valores inteiros |

## Equipamento

| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| TipoEquip | Simples | Texto | 10 | Arma ou armadura |

## Poção

| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| tipoPoc | Simples | Texto | 15 | Força, defesa, respeito ou habilidade |
| qntPoc | Simples | Numérico |  | Quantidade de atributo a ser ganho |

## Armadura

| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| TipoArmadura | Simples | Texto | 15 |  |
| Resistencia | Simples | Numérico |  |  |

## Arma

| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| TipoArma | Simples | Texto | 15 |  |
| Potencia | Simples | Numérico |  | Valores inteiros |

## Lugar

| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| idLugar | Determinante | Numérico |  |  |
| nomeLugar | Simples | Texto | 20 |  |
| Coordenadas | Simples | Numérico |  |  |
| DescricaoLugar | Simples | Texto | 300 |  |
| DonoLugar | Simples | Texto | 20 |  |

## Inimigo

| Atributo | Classe | Domínio | Tamanho | Descrição |
| ---- | ---- | ---- | ---- | ---- |
| idInimigo | Determinante | Numérico |  |  |
| NomeInimigo | Simples | Texto | 20 |  |
| DescricaoInimigo | Simples | Texto | 300 |  |
| Dano | Simples | Numérico |  |  |
| Vida | Simples | Numérico |  |  |