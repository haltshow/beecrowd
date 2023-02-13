const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const a = Number(lines.shift())
const b = Number(lines.shift())
const c = Number(lines.shift())

if ( (a > b) && (b <= c)) {
    console.log(":)")
} else if ((a < b) && (b >= c)) {
    console.log(":(")
} else if ((a < b) && (b < c) && ((b - a) > (c - b))) {
    console.log(":(")
} else if ((a < b) && (b < c) && ((b - a) <= (c - b))) {
    console.log(":)")
} else if ((a > b) && (b > c) && ((a - b) > (b - c))) {
    console.log(":)")
} else if ((a > b) && (b > c) && ((a - b) <= (b - c))) {
    console.log(":(")
} else if (a == b) {
    if (b < c) {
        console.log(":)")
    } else {
        console.log(":(")
    }
}