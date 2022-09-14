const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const n = Number(lines.shift())

let numAn = 0
let numAt = 0
let seq = ""
for(let i = 0; i < n; i++) {
    numAt += numAn
    if(i == 1) {
        numAt = i
        numAn = 0
        seq += numAt + " "
    } else {
        seq += numAt + " "
        numAn = numAt - numAn
    }
}

console.log(seq.trim())