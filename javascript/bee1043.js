const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")
 
const n1 = Number(lines.shift())
const n2 = Number(lines.shift())
const n3 = Number(lines.shift())

if((n1+n2) == n3 || (n2+n3) == n1 || (n1+n3) == n2) {
    const area = ((n1 + n2) * n3) / 2
    console.log("Area = " + area.toFixed(1))
} else {
    const perimetro = n1 + n2 + n3
    console.log("Perimetro = " + perimetro.toFixed(1))
}

