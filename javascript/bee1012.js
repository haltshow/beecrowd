var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split(" ");

var a = parseFloat(lines.shift())
var b = parseFloat(lines.shift())
var c = parseFloat(lines.shift())

// aF = parseFloat(a)
// bF = parseFloat(b)
// cF = parseFloat(c)

var triangulo = (a * c) / 2

var circulo = 3.14159 * (c * c)

var trapezio = ( a +  b ) * c / 2 

var quadrado = b * b

var retangulo = a * b

console.log("TRIANGULO: " + triangulo.toFixed(3))
console.log("CIRCULO: " + circulo.toFixed(3))
console.log("TRAPEZIO: " + trapezio.toFixed(3))
console.log("QUADRADO: " + quadrado.toFixed(3))
console.log("RETANGULO: " + retangulo.toFixed(3))