const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let i = 0

while (lines[i]) {
    if(Number(lines[i]) > 0) {
        console.log("vai ter duas!")
    } else {
        console.log("vai ter copa!")
    }
    i++
}