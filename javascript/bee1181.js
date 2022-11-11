const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const linha = Number(lines.shift())
const operacao = lines.shift().trim()
let soma = 0
let m = []

// Preenchendo a matriz com o stdin matriz[12][12]
for(let i = 0; i < 12; i++) {
    m[i] = []
    for(let j = 0; j < 12; j++) {
        m[i][j] = Number(lines.shift())
    }
}

// Somando os elementos da linha escolhida na entrada do stdin
for(let j = 0; j < 12; j++) {
    soma += m[linha][j]
}

if(operacao == 'S') {
    console.log(soma.toFixed(1))
} else {
    let media = soma / 12
    console.log(media.toFixed(1))
}