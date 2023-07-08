const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let i = 0

while (lines[i]) {
    const volume = parseFloat(lines[i]);
    const diametro = parseFloat(lines[i+1])
    const r = diametro / 2

    const altura = volume / (3.14 * (r*r))

    const area = 3.14*(r*r)

    console.log("ALTURA =", altura.toFixed(2))
    console.log("AREA =", area.toFixed(2))

    i += 2
}