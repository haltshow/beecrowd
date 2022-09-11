const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const n = Number(lines[0])
let n1 = 0
let n2 = 0
let n3 = 0
let media = 0


for(let i = 1; i <= n; i++) {
    const num = lines[i].split(" ")
    n1 = Number(num.shift())
    n2 = Number(num.shift())
    n3 = Number(num.shift())
    media = (n1 * 2 + n2 * 3 + n3 * 5) / 10
    console.log(media.toFixed(1))
}