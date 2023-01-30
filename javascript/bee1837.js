const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const a = lines.shift()
const b = lines.shift()
let q = 0
let r = 0

q = parseInt(a / b)
r = parseInt(a % b)

if(r < 0) {
    r += Math.abs(b)
}

q = (a - r) / b

console.log(q + " " + r)