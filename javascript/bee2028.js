const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let i = 0

while(lines[i]) {
    let string = ''
    let qtd = 0
    const num = parseInt(lines[i]);

    for (let i = 0; i <= num; i++) {
        if (i > 0) {
            for (let j = 1; j <= i; j++) {
                string += i + ' '
                
                qtd++
            }
        } else {
            string += i + ' '
            qtd++
        }
    }

    string = string.trim()

    let stringQtd = qtd + ' numero'

    if (qtd > 1) {
        stringQtd += 's'
    } 

    console.log(`Caso ${i+1}: ${stringQtd}`);
    console.log(string+'\n')

    i++
}