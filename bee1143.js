const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const n = Number(lines[0])

for(let i = 1; i <= n; i++) {
    console.log(i + " " + i*i + " " + i*i*i)
}