const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let soma = 0
let p = 0
let media = 0

for(let i = 0; i < lines.length; i++) {
    if(lines[i] >= 0) {
        soma += Number(lines[i]) 
        p = i
    } else {
        break;
    }
}

p++
media = soma / p
console.log(media.toFixed(2))