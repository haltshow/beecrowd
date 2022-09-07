const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const a = Number(lines.shift())
const b = Number(lines.shift())
const c = Number(lines.shift())
const d = Number(lines.shift())
const e = Number(lines.shift())

let par = 0


if(a % 2 == 0) {
    par++
}


if(b % 2 == 0) {
    par++
}


if(c % 2 == 0) {
    par++
}


if(d % 2 == 0) {
    par++
}


if(e % 2 == 0) {
    par++
}


console.log(par + " valores pares")