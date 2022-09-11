const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const n1 = Number(lines.shift())
const n2 = Number(lines.shift())
const n3 = Number(lines.shift())
const n4 = Number(lines.shift())
const n5 = Number(lines.shift())
const n6 = Number(lines.shift())

let c = 0

if(n1 > 0) {
    c++
}
if(n2 > 0) {
    c++
}
if(n3 > 0) {
    c++
}
if(n4 > 0) {
    c++;
}
if(n5 > 0) {
    c++
}
if(n6 > 0) {
    c++
}

console.log(c + " valores positivos")