const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const num_linhas = parseInt(lines[0])

for (let i = 0; i < num_linhas; i++) {
    const ano = parseInt(lines[i+1])

    if (ano - 2015 >= 0) {
        console.log(`${ano - 2014} A.C.`)

    } else {
        console.log(`${2015 - ano} D.C.`)
    }
}