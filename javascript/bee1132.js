const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const n1 = Number(lines.shift())
const n2 = Number(lines.shift())

let soma = 0

if(n1 < n2){
    for(let i = n1; i <= n2; i++) {
        if(i % 13 !== 0) {
            soma += i
        }
    }
} else {
    for (let i = n2; i <= n1; i++) {
        if(i % 13 !== 0) {
            soma += i
        }
    }
}

console.log(soma)