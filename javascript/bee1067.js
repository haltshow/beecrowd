const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const x = Number(lines.shift())

if(x >= 1 && x <= 1000) {
    for(let i = 1; i <= x; i++) {
        if(i % 2 !== 0) {
            console.log(i)
        }
    }
} else {
    console.log("Número não está dentro da regra!")
}