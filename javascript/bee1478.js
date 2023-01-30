const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let primeiro = 1
let text = ""

for(let cont = 0; cont < lines.length; cont++) {
    if(Number(lines[cont]) === 0) {
        break;
    }

    primeiro = 1
    text = ""

    for(let i = 0; i < lines[cont]; i++) {
        text = ""
        primeiro = i + 2
        for(let j = 0; j < lines[cont]; j++) {
            if (i < j) {
                primeiro++
            } else if (i > j) {
                primeiro--
            } else {
                primeiro = 1
            }

            if (j === 0) {
                text += `${primeiro}`
            } else {
                text += `   ${primeiro}`
            }
        }   
        console.log(text)
    }
    console.log('')
}