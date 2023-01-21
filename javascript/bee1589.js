const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const linhas = lines[0]

for(let i = 1; i <= linhas; i++) {
    let res = lines[i].split(" ")
    const a = Number(res[0]);
    const b = Number(res[1]);

    const c = a + b

    console.log(c)
}