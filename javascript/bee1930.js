const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const t1 = Number(lines.shift())
const t2 = Number(lines.shift())
const t3 = Number(lines.shift())
const t4 = Number(lines.shift())

const result = (t1+t2+t3+t4) - 3

console.log(result)