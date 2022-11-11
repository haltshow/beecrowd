const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const x = Number(lines.shift())
let res = 1

for(let i = x; i >= 1; i--) {
    res *= i
}

console.log(res)