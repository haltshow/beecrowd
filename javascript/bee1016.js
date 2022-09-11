const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const km = lines.shift();

const tempo = km * 2

console.log(tempo + " minutos")