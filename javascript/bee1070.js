const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const a = Number(lines.shift())
const l = a + 11

for(let i = a; i <= l; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
}