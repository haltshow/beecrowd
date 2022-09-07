const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const n1 = Number(lines.shift())
const n2 = Number(lines.shift())

if(n1 < n2 ) {
    for(let i = n1+1; i < n2; i++) {
        if (i % 5 == 2 || i % 5 == 3) {
            console.log(i)
        }
    }
} else {
    for(let i = n2+1; i < n1; i++) {
        if (i % 5 == 2 || i % 5 == 3) {
            console.log(i)
        }
    }
}