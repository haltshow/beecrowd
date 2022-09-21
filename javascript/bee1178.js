const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

let x = parseFloat(lines.shift())
let n = []

for(let i = 0; i < 100; i++) {
    n[i] = x.toLocaleString('en-US', { minimumFractionDigits: 4 })
    n[i] = n[i].replace(/,/g, '')
    console.log(`N[${i}] = ${n[i]}`)
    x /= 2
}