const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

for(let i = 0; i <= 99; i++) {
    if(Number(lines[i]) <= 10) {
        console.log(`A[${i}] = ${Number(lines[i]).toFixed(1)}`)
    }
}