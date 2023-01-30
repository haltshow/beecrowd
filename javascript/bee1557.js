const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let t = 0

for(let cont = 0; cont < lines.length; cont++) {
    if(Number(lines[cont]) === 0) {
        break;
    }

    t = Math.pow(4, lines[cont] - 1);
    t = t.toFixed(0).length;

    for(let i = 0; i < lines[cont]; i++) {
        let line = [] 
        for(let j = 0; j < lines[cont]; j++) { 
            let aux = Math.pow(2, i + j).toFixed(0);

            line.push(aux.padStart(t))
        }
        console.log(line.join(" "))
    }
    console.log("")
}