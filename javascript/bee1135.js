const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

let n = 1
let text = ""

for (let i = 1; i <= Number(lines[0]); i++) {
    for(let y = 1; y <= 3; y++) {
        text += n + " "
        n++
    }
    n++
    text += "PUM"
    console.log(text)
    text = ""
}