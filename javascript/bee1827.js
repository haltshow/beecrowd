const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

for(let cont = 0; cont < lines.length; cont++) {
    if(Number(lines[cont]) === 0) {
        break;
    }

    for(let i = 0; i < lines[cont]; i++) {
        let line = [] 
        for(let j = 0; j < lines[cont]; j++) { 
            let numb = 0
            if(i == j) {
                numb = 2
            }

            if(i+j+1 == lines[cont]) {
                numb = 3
            }

            if(
                i >= Math.trunc(lines[cont] / 3) &&
                j >= Math.trunc(lines[cont] / 3) &&
                i < lines[cont] - Math.trunc(lines[cont] / 3) &&
                j < lines[cont] - Math.trunc(lines[cont] / 3)
            ) {
                numb = 1
            }

            if(
                i == Math.trunc(lines[cont] / 2) &&
                j == Math.trunc(lines[cont] / 2) &&
                lines[cont] % 2 == 1
            ) {
                numb = 4
            }

            line.push(numb)
        }
        console.log(line.join(""))
    }
    console.log("")
}