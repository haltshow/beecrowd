const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let i = 0
let a = 0
let b = 0
let c = 0
let res = 0


while (lines[i] != 0) {
    valores = lines[i].split(' ')
    
    a = valores[0]
    b = valores[1]
    c = valores[2]

    res = parseInt(Math.sqrt((a*b*100) / c)) 

    console.log(res)

    i++
}