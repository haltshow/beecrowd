const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let numero = 0
let n1 = 0
let n2 = 0

let total = 0
let vitG = 0
let vitI = 0
let empate = 0

for(let i = 0; i < lines.length; i++) {
    if(i > 0){
        if(Number(lines[i-1]) === 1){
            const separador = lines[i].split(" ")
            n1 = Number(separador.shift())
            n2 = Number(separador.shift())
            total++
            if(n1 > n2) {
                vitI++
            } else if(n1 < n2) {
                vitG++
            } else {
                empate++
            }
            console.log("Novo grenal (1-sim 2-nao)")
        } else if(Number(lines[i] === 2)) {
            break;
        }
    } else {
        const separador = lines[i].split(" ")
        n1 = Number(separador.shift())
        n2 = Number(separador.shift())
        total++
        if(n1 > n2) {
            vitI++
        } else if(n1 < n2) {
            vitG++
        } else {
            empate++
        }
        console.log("Novo grenal (1-sim 2-nao)")
    }
}

console.log(total + " grenais")
console.log("Inter:" + vitI)
console.log("Gremio:" + vitG)
console.log("Empates:" + empate)
console.log(vitG > vitI ? "Gremio venceu mais" : vitG < vitI ? "Inter venceu mais" : "Não houve vencedor")