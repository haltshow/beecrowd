var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var raio = lines.shift();
var pi = 3.14159;

var resultado = (4.0/3) * pi * (raio * raio * raio)

console.log("VOLUME = " + resultado.toFixed(3))