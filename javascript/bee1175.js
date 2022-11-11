const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let aux = 0

for(let i = 0; i <= 19; i++) {
    if(i < 10) {
        aux = lines[i]
        lines[i] = lines[lines.length - (i+1)]
        lines[lines.length - (i+1)] = aux
    }
    console.log(`N[${i}] = ${Number(lines[i])}`)
}