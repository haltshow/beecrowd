const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let soma = 0
let somaTot = 0

for(let i = 0; i <= lines.length; i++) {
    if(Number(lines[i]) !== 0) {
        if(Number(lines[i]) % 2 === 0) {
            soma = Number(lines[i])
        } else {
            soma = Number(lines[i]) + 1
        }
        somaTot += soma
        for(let y = 1; y <= 4; y++) {
            soma += 2
            somaTot += soma
        }
        console.log(somaTot)
        somaTot = 0
    } else {
        break;
    }
}

