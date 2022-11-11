const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const x = Number(lines[0])

let z = null

for(let i = 1; i <= lines.length; i++) {
    if(lines[i] > x) {
        z = Number(lines[i])
        break;
    }
}

let res = null
let p = 0
let cont = 0
while(res <= z) {
    cont++
    res += x + p
    p += 1
}

console.log(cont)