const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n")

let nota = 0
let media = 0
let contnota = 0

for(let i = 0; i < lines.length; i++) {
    nota = Number(lines[i])

    if(contnota < 2) {
    
        if(nota >= 0 && nota <= 10) {
            media += nota
            contnota++
        } else {
            console.log("nota invalida")
        }
    }
}

media = media / 2

console.log("media = " + media.toFixed(2))