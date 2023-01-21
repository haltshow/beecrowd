const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let i = 0;

while(lines[i]) {
    let lesmas = lines[i+1].split(" ")
    let nivel = 1

    for(let y = 0; y < lines[i]; y++) {
        let lesma = Number(lesmas[y])
        
        if(nivel !== 3) {
            if(lesma >= 10 && lesma < 20) {
                nivel = 2
            } else if (lesma >= 20) {
                nivel = 3
            }
        }
    }

    console.log(nivel)
    i += 2
}