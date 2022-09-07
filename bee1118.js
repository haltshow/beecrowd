const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let nota = 0
let media = 0
let countnotas = 0

for (let i = 0; i < lines.length; i++) {
    nota = Number(lines[i])

    if(countnotas < 2){
        if(nota >= 0 && nota <= 10) {
            media += nota
            countnotas++
        } else {
            console.log("nota invalida")
        }
    } else {
        if(countnotas === 2){
            media = media / 2
            console.log("media = " + media.toFixed(2))
            countnotas++
            console.log("novo calculo (1-sim 2-nao)")
        }
        if(nota === 1) {
            countnotas = 0
            media = 0
        } else if(nota === 2) {
            break;
        } else {
            console.log("novo calculo (1-sim 2-nao)")
        }
    }
}