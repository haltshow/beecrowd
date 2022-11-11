const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

for(let i = 0; i < lines.length; i++) {
    if(Number(lines[i]) <= 0) {
        lines[i] = 1
    }
}

for(let i = 0; i < lines.length; i++) {
    console.log(`X[${i}] = ${Number(lines[i])}`)
}