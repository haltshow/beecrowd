const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split();

const rep = parseInt(lines.shift())

let text = ""

for (let i = 1; i <= rep; i++) {
    if(i == rep) {
        text += "Ho"
    } else {
        text += "Ho "
    }
}

text += "!"
console.log(text)