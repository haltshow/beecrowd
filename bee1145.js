const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const n1 = Number(lines.shift())
const n2 = Number(lines.shift())
let text = ""

for(let i = 1; i <= n2; i++) {
    text += i
    if(i % n1 === 0) {
        console.log(text)
        text = ""
    } else {
        text += " "
    }
}