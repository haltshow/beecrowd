const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const operacao = lines.shift().trim()
let soma = 0
let m = []
let count = 0
let startColumn = 1
let endColumn = 10

// Preenchendo a matriz
for(let i = 0; i < 12; i++) {
    m[i] = []
    for(let j = 0; j < 12; j++) {
        m[i][j] = Number(lines.shift())
    }
}

for(let i = 11; i >= 7; i--) {
    for(let j = startColumn; j <= endColumn; j++) {
        soma += m[i][j]
        count++
    }
    startColumn++
    endColumn--
}

if(operacao == 'S') {
    console.log(soma.toFixed(1))
} else {
    let media = soma / count
    console.log(media.toFixed(1))
}