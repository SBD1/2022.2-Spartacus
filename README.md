# 2022.2-Spartacus

## Sobre Spartacus

Spartacus é um jogo baseado nas histórias gregas, que retrata a vida de um guerreiro com objetivo de ficar cada vez mais forte e mais respeitado em sua cidade. O jogo contém missões, batalhas, inimigos, tudo que uma verdadeira história deve ter.

<div style="text-align:center"><img src="https://thumbs.gfycat.com/AnguishedFirstKangaroo-size_restricted.gif"></div>

## Contribuidores

|                                                                                        **Foto**                                                                                         |         **Nome**         |                    **GitHub**                     |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------: | :-----------------------------------------------: |
| <a href="https://github.com/gabrielrosa09"><img src="https://avatars.githubusercontent.com/u/65716283?v=4" height="auto" width="90" style="border-radius:50%"></a> &nbsp; &nbsp; &nbsp; |  Gabriel da Silva Rosa   | [gabrielrosa09](https://github.com/gabrielrosa09) |
|   <a href="https://github.com/Hellen159"><img src="https://avatars.githubusercontent.com/u/84354824?v=4" height="auto" width="90" style="border-radius:50%"></a> &nbsp; &nbsp; &nbsp;   | Hellen Fernanda Mendonça |     [Hellen159](https://github.com/Hellen159)     |
| <a href="https://github.com/lucaslobao-18"><img src="https://avatars.githubusercontent.com/u/83256558?v=4" height="auto" width="90" style="border-radius:50%"></a> &nbsp; &nbsp; &nbsp; |   Lucas Andrade Lobão    | [lucaslobao-18](https://github.com/lucaslobao-18) |
|   <a href="https://github.com/luclopesr"><img src="https://avatars.githubusercontent.com/u/88348202?v=4" height="auto" width="90" style="border-radius:50%"></a> &nbsp; &nbsp; &nbsp;   |    Lucas Lopes Rocha     |     [luclopesr](https://github.com/luclopesr)     |

### Matrículas

| Nome                              | Matrícula |
| --------------------------------- | --------- |
| Gabriel da Silva Rosa             | 202023681 |
| Hellen Fernanda Mendonça de Faria | 202016480 |
| Lucas Andrade Lobão               | 202023888 |
| Lucas Lopes Rocha                 | 202023903 |

## Como executar o cógido

Antes de tudo, você precisará ter o [NodeJS](https://nodejs.org/en/) previamente instalado.

Após clonar o repositótio em sua máquina, siga os passos a seguir.

### Passo 1
Em seu terminal, entre na pasta Game:
```bash
$ cd Game
```

### Passo 2
Rode o comando a seguir no terminal para que se instale as dependências necessárias.
```bash
$ npm i
```

### Passo 3
Ainda dentro da pasta Game, crie um arquivo `.env` e insira as informações a seguir:

```
HOST= localhost
PORT= 5432
USER_DB= <nome de usuário do seu PostgreSQL. Padrão: postgres>
PASSWORD= <senha do seu PostgreSQL>
DATABASE= postgres
```

### Passo 4
Por fim, salve tudo e rode o comando a seguir no terminal para iniciar o jogo.
```bash
$ npm start
```