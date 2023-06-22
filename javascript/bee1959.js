const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const numLados = parseInt(lines.shift())
const tamLado = parseInt(lines.shift())

console.log(numLados * tamLado)