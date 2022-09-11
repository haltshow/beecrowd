const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let text = ""

for(let i = 0; i <= lines.length; i++) {
    if(lines[i] === 0) {
        break;
    } else {
        for(let y = 1; y <= lines[i]; y++) {
            text += y
            if(y == lines[i]) {
                console.log(text)
                text = ""
            } else {
                text += " "
            }
        }
    }
}
