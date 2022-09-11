const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let total = 0
let coelhos = 0
let ratos = 0
let sapos = 0

for(let i = 1; i <= Number(lines[0]); i++) {
    const separador = lines[i].split(" ")
    const quant = Number(separador.shift())
    const tipo = separador.shift()
    

    total += quant

    if(tipo[0] == "C") {
        coelhos += quant
    } else if(tipo[0] == "R") {
        ratos += quant
    } else if(tipo[0] == "S") {
        sapos += quant
    }
}

let perCo = coelhos * 100 / total
let perRa = ratos * 100 / total
let perSa = sapos * 100 / total


console.log("Total: " + total + " cobaias")
console.log("Total de coelhos: " + coelhos)
console.log("Total de ratos: " + ratos)
console.log("Total de sapos: " + sapos)
console.log("Percentual de coelhos: " + perCo.toFixed(2) + " %")
console.log("Percentual de ratos: " + perRa.toFixed(2) + " %")
console.log("Percentual de sapos: " + perSa.toFixed(2) + " %")