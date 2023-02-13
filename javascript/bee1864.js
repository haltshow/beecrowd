const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const tamString = lines.shift()
const frase = "LIFE IS NOT A PROBLEM TO BE SOLVED"

console.log(frase.substring(0, tamString))