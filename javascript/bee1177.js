const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const t = Number(lines.shift())
let n = []
let cont = 0

for(let i = 0; i < 1000; i++) {
    console.log(`N[${i}] = ${Number(cont)}`)
    cont++
    if(cont == t) {
        cont = 0
    }
}