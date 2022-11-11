const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const a = Number(lines.shift())
const b = Number(lines.shift())
const c = Number(lines.shift())
const d = Number(lines.shift())
const e = Number(lines.shift())
const f = Number(lines.shift())

let soma = 0
let pos = 0
let media = 0

if(a > 0) {
    pos++;
    soma += a
}
if(b > 0) {
    pos++;
    soma += b
}
if(c > 0) {
    pos++;
    soma += c
}
if(d > 0) {
    pos++;
    soma += d
}
if(e > 0) {
    pos++;
    soma += e
}
if(f > 0) {
    pos++;
    soma += f
}

media = soma / pos

console.log(pos + " valores positivos\n" + media.toFixed(1))