const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const espacos = lines.shift()

let arrNumbers = [];
let arrBoolean = [];
let figurinhasDiferentes = 0;

for (let i = 1; i <= espacos; i++) {
    arrNumbers.push(i);
    arrBoolean.push(false);
}

const qtdFigurinhas = lines.shift()

for (let i = 1; i <= qtdFigurinhas; i++) {
    let numeroFigurinha = Number(lines.shift());

    for (let i = 0; i < espacos; i++) {
        if (numeroFigurinha == arrNumbers[i] && arrBoolean[i] == false) {
            arrBoolean[i] = true
            figurinhasDiferentes++
        }
    }
}

const result = espacos - figurinhasDiferentes

console.log(result)