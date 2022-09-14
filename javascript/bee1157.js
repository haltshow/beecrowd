const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const a = Number(lines.shift())

for(let i = 1; i <= a; i++) {
    if(a % i === 0) {
        console.log(i)
    }
}