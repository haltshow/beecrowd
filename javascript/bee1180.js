const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const n = Number(lines[0]);
const valores = lines[1].split(" ");
let menor = Number(valores[0]);
let posicao = 0;

for (let i = 0; i < n; i++) {
  if (Number(valores[i]) < menor) {
    menor = Number(valores[i]);
    posicao = i;
  }
}

console.log("Menor valor: " + menor)
console.log("Posicao: " + posicao)
