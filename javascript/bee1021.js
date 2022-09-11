const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

let valor = lines.shift()

console.log("NOTAS:")

let qtdNotas = parseInt(valor / 100)
console.log(`${qtdNotas} nota(s) de R$ 100.00`)
valor = valor % 100

qtdNotas = parseInt(valor / 50)
console.log(`${qtdNotas} nota(s) de R$ 50.00`)
valor = valor % 50

qtdNotas = parseInt(valor / 20)
console.log(`${qtdNotas} nota(s) de R$ 20.00`)
valor = valor % 20

qtdNotas = parseInt(valor / 10)
console.log(`${qtdNotas} nota(s) de R$ 10.00`)
valor = valor % 10

qtdNotas = parseInt(valor / 5)
console.log(`${qtdNotas} nota(s) de R$ 5.00`)
valor = valor % 5

qtdNotas = parseInt(valor / 2)
console.log(`${qtdNotas} nota(s) de R$ 2.00`)
valor = valor % 2

valor = parseInt(valor * 100)

console.log("MOEDAS:")

let qtdMoedas = parseInt(valor / 100)
console.log(`${qtdMoedas} moeda(s) de R$ 1.00`)
valor = valor % 100

qtdMoedas = parseInt(valor / 50)
console.log(`${qtdMoedas} moeda(s) de R$ 0.50`)
valor = valor % 50

qtdMoedas = parseInt(valor / 25)
console.log(`${qtdMoedas} moeda(s) de R$ 0.25`)
valor = valor % 25

qtdMoedas = parseInt(valor / 10)
console.log(`${qtdMoedas} moeda(s) de R$ 0.10`)
valor = valor % 10

qtdMoedas = parseInt(valor / 5)
console.log(`${qtdMoedas} moeda(s) de R$ 0.05`)
valor = valor % 5

qtdMoedas = valor
console.log(`${qtdMoedas} moeda(s) de R$ 0.01`)






