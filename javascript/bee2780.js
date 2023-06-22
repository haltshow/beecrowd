const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const distancia = Number(lines.shift())

if (distancia <= 800) {
    console.log(1)
} else if (distancia > 800 && distancia <= 1400) {
    console.log(2)
} else if (distancia > 1400 && distancia <= 2000) {
    console.log(3)
}