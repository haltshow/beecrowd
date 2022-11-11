var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var number = lines.shift()
var hora_trabalhada = lines.shift()
var valor_hora_trabalhada = lines.shift()

var salario = hora_trabalhada * valor_hora_trabalhada

console.log("NUMBER = " + number)
console.log("SALARY = U$ " + salario.toFixed(2))