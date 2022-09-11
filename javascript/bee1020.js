const input = require("fs").readFileSync("stdin", "utf-8");

const lines = input.split(" ")

let valor = lines.shift()

const anos = parseInt(valor / 365)
valor = valor % 365

const meses = parseInt(valor / 30)
valor = valor % 30

const dias = valor

console.log(`${anos} ano(s)`)
console.log(`${meses} mes(es)`)
console.log(`${dias} dia(s)`)
