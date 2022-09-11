const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let maior = 0
let pos = 0

for(let i = 0; i < 100; i++) {
    if(Number(lines[i]) > maior) {
        maior = Number(lines[i])
        pos = i+1
    }
}

console.log(maior + "\n" + pos)