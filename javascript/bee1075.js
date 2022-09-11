const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const n = lines.shift()

for(let i=1; i<=10000; i++) {
    if(i % n == 2) {
        console.log(i)
    }
}