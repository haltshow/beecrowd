const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const gabarito = parseInt(lines[0])

const respostas = lines[1].split(' ')

let qtd = 0

for (let i = 0; i < respostas.length; i++) {
    if (parseInt(respostas[i]) == gabarito) {
        qtd++
    }
}

console.log(qtd)