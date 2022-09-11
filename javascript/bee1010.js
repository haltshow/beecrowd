var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var info_item1 = lines.shift().split(" ")
var info_item2 = lines.shift().split(" ")

var num_peca1 = info_item1.shift();
var qtd_peca1 = info_item1.shift();
var valor_peca1 = info_item1.shift();

var num_peca2 = info_item2.shift();
var qtd_peca2 = info_item2.shift();
var valor_peca2 = info_item2.shift();

var total = (parseInt(qtd_peca1) * parseFloat(valor_peca1)) + (parseInt(qtd_peca2) * parseFloat(valor_peca2));

console.log("VALOR A PAGAR: R$ " + total.toFixed(2))