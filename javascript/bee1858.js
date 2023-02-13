const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const qtd = lines.shift()
const pessoa = lines.shift().split(" ")
let menor = pessoa[0]
let menorIndice = 0

for (let i = 1; i <= qtd; i++) {
    if (pessoa[i] < menor) {
        menor = pessoa[i]
        menorIndice = i
    }
}

menorIndice += 1

console.log(menorIndice)