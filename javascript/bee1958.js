const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

let sinal = lines[0][0];
let num = parseFloat(lines.shift());

num = num.toExponential(4);
num = num.split('e');

if (num[1].length < 3) {
    num[1] = num[1][0] + "0" + num[1][1]
}

let not = ''

if (Number(num[0]) === 0 && sinal == '-') {
    num[0] = sinal + num[0]
} else if (Number(num[0]) >= 0) {
    num[0] = "+" + num[0]
}

not += num[0] + "E" + num[1]

console.log(not)