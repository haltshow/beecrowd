const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let rep = lines.shift()

for (let i = 0; i < rep; i++) { 
    let num = Number(lines.shift())

    if (num % 2 === 0) {
        console.log(0)
    } else {
        console.log(1)
    }
}