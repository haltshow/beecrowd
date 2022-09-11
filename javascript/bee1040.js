const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const x = Number(lines.shift())
const y = Number(lines.shift())

if(x == 0.0 && y == 0.0) {
    console.log("Origem")
} else if(x == 0.0) {
    console.log("Eixo Y")
} else if(y == 0.0) {
    console.log("Eixo X")
} else if(x > 0 && y > 0) {
    console.log("Q1")
} else if(x < 0 && y > 0) {
    console.log("Q2")
} else if(x < 0 && y < 0) {
    console.log("Q3")
} else {
    console.log("Q4")
}