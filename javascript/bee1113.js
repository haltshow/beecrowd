const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let n1 = 0
let n2 = 0

for(let i = 0; i < lines.length; i++) {
    const separator = lines[i].split(" ")
    n1 = Number(separator.shift())
    n2 = Number(separator.shift())

    if(n1 !== n2) {
        if(n1 > n2) {
            console.log("Decrescente")
        } else {
            console.log("Crescente")
        }
    } else {
        break;
    }
}