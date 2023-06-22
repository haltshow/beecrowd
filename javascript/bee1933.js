const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const a = Number(lines.shift())
const b = Number(lines.shift())

if (a > b) {
    console.log(a)
} else if (a < b) {
    console.log(b)
} else {
    console.log(a)
}