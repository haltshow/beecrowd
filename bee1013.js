var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split(" ");

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

var maiorAB = ((a + b) + Math.abs(a-b)) / 2

var maiorBC = ((c + maiorAB) + Math.abs(c - maiorAB)) / 2

console.log(maiorBC + " eh o maior")