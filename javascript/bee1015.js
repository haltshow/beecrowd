const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const info1 = lines.shift().split(" ");
const info2 = lines.shift().split(" ");

const x1 = info1.shift();
const y1 = info1.shift();

const x2 = info2.shift();
const y2 = info2.shift();

const resultado = Math.sqrt(((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)))

console.log(resultado.toFixed(4))