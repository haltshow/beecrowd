const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const num_alunos = parseInt(lines[0]);

let maior_nota = 0;
let maior_mat = 0;

for (let i = 1; i <= num_alunos; i++) {
    const linha = lines[i].split(' ')
    if (i == 1) {
        maior_nota = parseFloat(linha[1])
        maior_mat = parseInt(linha[0])
    } else {
        if (parseFloat(linha[1]) > maior_nota) {
            maior_nota = parseFloat(linha[1])
            maior_mat = parseInt(linha[0])
        }
    }
}

if (maior_nota >= 8) {
    console.log(maior_mat)
} else {
    console.log('Minimum note not reached')
}