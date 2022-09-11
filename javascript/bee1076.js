const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const n = Number(lines.shift())

if(n > 2 && n < 1000) {
    for(let i=1; i <= 10; i++) {
        console.log(i + " x " + n + " = " + n*i)
    }
} else {
    console.log("Número fora do limite permitido")
}