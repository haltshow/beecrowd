const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const a = Number(lines.shift())
const b = Number(lines.shift())

let impar = 0

if(a > b) {
    for(let i = b+1; i < a; i++) {
        if(i % 2 !== 0) {
            impar += i
        }
    }
} else if(a < b){
    for(let i = a+1; i < b; i++) {
        if(i % 2 !== 0) {
            impar += i
        }
    }
}

console.log(impar)