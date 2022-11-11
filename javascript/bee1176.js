const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

fib = []
let numAn = 0
let numAt = 0

for(let i = 0; i <= 60; i++) {
    numAt += numAn
    if(i == 1) {
        numAt = i
        numAn = 0
    } else {
        
        numAn = numAt - numAn
    }
    fib[i] = numAt
}

for(let y = 1; y <= Number(lines[0]); y++) {
    console.log(`Fib(${Number(lines[y])}) = ${fib[Number(lines[y])]}`)
}