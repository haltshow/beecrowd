const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let n1 = 0
let n2 = 0

for(let i = 0; i < lines.length; i++) {
    const separador = lines[i].split(" ")
    n1 = Number(separador.shift())
    n2 = Number(separador.shift())

    if(n1 !== 0 && n2 !== 0) {
        if(n1 > 0 && n2 > 0) {
            console.log("primeiro")
        } else if(n1 < 0 && n2 > 0) {
            console.log("segundo")
        } else if(n1 < 0 && n2 < 0) {
            console.log("terceiro")
        } else {
            console.log("quarto")
        }
    } else {
        break;
    }
}