const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const n = Number(lines[0])
let soma = 0

for(let i = 1; i <= n; i++) {
    x = Number(lines[i])
    for(let y = 1; y < x; y++) {
        if(x % y === 0) {
            soma += y
        }
    }
    if(soma == x) {
        console.log(x + " eh perfeito")
    } else {
        console.log(x + " nao eh perfeito")
    }
    soma = 0
}