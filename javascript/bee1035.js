const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

let a = parseInt(lines.shift())
let b = parseInt(lines.shift())
let c = parseInt(lines.shift())
let d = parseInt(lines.shift())

let somaab = parseInt(a + b)
let somacd = parseInt(c + d)

if((b > c) && (d > a) && (somacd > somaab) && (c > 0) && (d > 0) && (a % 2 === 0)) {
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos")
}