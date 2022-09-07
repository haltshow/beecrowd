var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var nome = lines.shift();
var salario = lines.shift();
var total_vendas = lines.shift()

var comissao = (15 * parseFloat(total_vendas)) / 100

var total_mes = parseFloat(salario) + comissao

console.log("TOTAL = R$ " + total_mes.toFixed(2))
