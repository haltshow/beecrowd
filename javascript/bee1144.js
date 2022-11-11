const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const n = Number(lines[0])
let segundaLinhaQuad = 0
let segundaLinhaCubo = 0

for(let i = 1; i <= n; i++) {
    segundaLinhaQuad = i*i+1
    segundaLinhaCubo = i*i*i+1
    console.log(i + " " + i*i + " " + i*i*i)
    console.log(i + " " + segundaLinhaQuad + " " + segundaLinhaCubo)
}