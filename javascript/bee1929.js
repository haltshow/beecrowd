const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());
let d = Number(lines.shift());

if (a < b + c && b < a + c && c < a + b) {
    console.log("S")
} else if (a < b + d && b < a + d && d < a + b) {
    console.log("S");
} else if (a < c + d && c < a + d && d < a + c) {
    console.log("S")
} else if (b < c + d && c < b + d && d < b + c) {
    console.log("S")
} else {
    console.log("N")
}