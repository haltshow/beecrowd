const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())

let x = parseFloat((B * B) - (4 * A * C))

if(x < 0) {
    console.log("Impossivel calcular")
} else if(A == 0) {
    console.log("Impossivel calcular")
}else {
    let R1 = parseFloat((-B + Math.sqrt(x)) / (2 * A))
    console.log("R1: " + R1.toFixed(5))
    let R2 = parseFloat((-B - Math.sqrt(x)) / (2 * A))
    console.log("R2: " + R2.toFixed(5))
}

