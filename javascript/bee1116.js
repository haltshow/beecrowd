const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n")

let n1 = 0
let n2 = 0
let div = 0

for(let i = 1; i <= lines[0]; i++) {
    const separador = lines[i].split(" ")
    n1 = Number(separador.shift())
    n2 = Number(separador.shift())
    div = n1 / n2

    if(n1 === 0) {
        console.log("0.0")
    } else if(n2 === 0) {
        console.log("divisao impossivel")
    } else {
        console.log(div.toFixed(1))
    }
}