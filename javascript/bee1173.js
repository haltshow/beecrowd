const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const v = Number(lines[0])
let vetor = []

for(let i = 0; i < 10; i++) {
    if(i === 0) {
        vetor[i] = v
    } else {
        vetor[i] = vetor[i-1] * 2
    }
    console.log(`N[${i}] = ${Number(vetor[i])}`)
}