const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let soma = 0
let somaTot = 0

for(let i = 1; i <= lines[0]; i++) {
    const separador = lines[i].split(" ")
    x = Number(separador[0])
    y = Number(separador[1])
    if(x % 2 === 0) {
        soma = x + 1
    } else {
        soma = x
    }
    somaTot += soma
    for(let z = 1; z <= y-1; z++) {
        soma += 2
        somaTot += soma
    }
    console.log(somaTot)
    somaTot = 0
}
