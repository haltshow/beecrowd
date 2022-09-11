const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const A = Number(lines.shift())
const B = Number(lines.shift())

if(A % B == 0 || B % A == 0) {
    console.log("Sao Multiplos")
} else {
    console.log("Nao sao Multiplos")
}