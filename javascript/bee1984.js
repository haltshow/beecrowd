const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const num = lines[0].trim()

let string  = ''

for (let i = num.length-1; i >= 0; i--) {
    string += num[i]
}

console.log(string)