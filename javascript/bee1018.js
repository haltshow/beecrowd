const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let A = parseInt(lines.shift())

console.log(A)

let qtdNotas = parseInt(A / 100)
console.log(`${qtdNotas} nota(s) de R$ 100,00`)
A = A % 100

qtdNotas = parseInt(A / 50)
console.log(`${qtdNotas} nota(s) de R$ 50,00`)
A = A % 50

qtdNotas = parseInt(A / 20)
console.log(`${qtdNotas} nota(s) de R$ 20,00`)
A = A % 20

qtdNotas = parseInt(A / 10)
console.log(`${qtdNotas} nota(s) de R$ 10,00`)
A = A % 10

qtdNotas = parseInt(A / 5)
console.log(`${qtdNotas} nota(s) de R$ 5,00`)
A = A % 5

qtdNotas= parseInt(A / 2)
console.log(`${qtdNotas} nota(s) de R$ 2,00`)
A = A % 2

qtdNotas = 0
if(A == 1) {
    qtdNotas = 1
}

console.log(`${qtdNotas} nota(s) de R$ 1,00`)

