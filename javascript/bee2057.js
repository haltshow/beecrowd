const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const saida = parseInt(lines[0]);
const tempo_viagem = parseInt(lines[1]);
const fuso = parseInt(lines[2]);

let hora_destino = saida + tempo_viagem + fuso;

hora_destino = hora_destino < 0 ? 24 - (hora_destino * -1) : hora_destino
hora_destino = hora_destino > 24 ? hora_destino - 24 : hora_destino

console.log(hora_destino)