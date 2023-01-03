//------------ Metodos ----------------
//-------------Locais que o local em que o jogador esta pode ir-----------
function CentroE() {
  console.log("Apartir daqui você pode se locomover por alguns locais! Veja:");
  console.log("1. Trezentes- Loja de equipamentos.");
  console.log("2. Alquimia- Loja de poções.");
  console.log("3. Saída de Esparta.");
  console.log("4. Entrada de Esparta.");
}

function Trezentes() {
  console.log("Apartir daqui você pode se locomover por alguns locais! Veja:");
  console.log("1. Centro de Esparta.");
  console.log("2. Centro de Treinamentos.");
}

function Alquimia() {
  console.log("Apartir daqui você pode se locomover por alguns locais! Veja:");
  console.log("1. Centro de Esparta.");
  console.log("2. Oeste de Esparta.");
}

function SaidaE() {
  console.log("Apartir daqui você pode se locomover por alguns locais! Veja:");
  console.log("1. Centro de Esparta.");
  console.log("2. Floresta Brightwood.");
  console.log("3. Centro de Batalha.");
  console.log("4. Lago Prespa.");
}

function EntradaE() {
  console.log("Apartir daqui você pode se locomover por alguns locais! Veja:");
  console.log("1. Centro de Esparta.");
  console.log("2. Floresta Amazônica.");
}

module.exports = { CentroE, Trezentes, Alquimia, SaidaE, EntradaE };
