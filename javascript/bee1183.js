const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const operacao = lines.shift().trim()
let soma = 0
let m = []
let count = 0

// Preenchendo a matriz
for(let i = 0; i < 12; i++) {
    m[i] = []
    for(let j = 0; j < 12; j++) {
        m[i][j] = Number(lines.shift())
        if(j > i) {
            count++
            // Soma os elementos da matriz na coluna especificada
            soma += m[i][j]
        }
    }
}

if(operacao == 'S') {
    console.log(soma.toFixed(1))
} else {
    let media = soma / count
    console.log(media.toFixed(1))
}