const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const num = parseInt(lines.shift())

console.log(num.toString(16).toUpperCase())