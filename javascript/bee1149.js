const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const a = Number(lines[0])
let n = 0
for(let i = 1; i <= lines.length; i++) {
    if(lines[i] > 0 ) {
        n = Number(lines[i])
        break;
    }
}

let soma = 0

for(let y = 0; y <= n-1; y++) {
    soma += a + y
}

console.log(soma)