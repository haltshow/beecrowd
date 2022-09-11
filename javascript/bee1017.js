const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const tempo = lines.shift();

const vm = lines.shift();

const combustivel = tempo * vm / 12

console.log(combustivel.toFixed(3))