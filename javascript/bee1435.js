const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let m = []

for(let cont = 0; cont < lines.length; cont++) {
    for(let i = 0; i < lines[cont]; i++) {
        m[i] = []
        for(let j = 0; j < lines[cont]; j++) {
            m[i][j] = 1
        }
    }
    // console.log(m)
}