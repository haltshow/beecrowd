const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const a = Number(lines.shift())

if(a > 5 && a < 2000) {
    for(let i = 1; i <= a; i++) {
        if(i % 2 === 0) {
            console.log(i + "^2 = " + i*i)
        }
    }
} else {
    console.log("Numero fora do limite permitido")
}