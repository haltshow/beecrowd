const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const num_estrelas = parseInt(lines[0]);

const carneiros = lines[1].split(' ');

let i = 0;
let num_ataques = 0;
let carneiros_nao_roubados = 0;

while (i >= 0 && i <= num_estrelas-1) {
    let num_carneiro = parseInt(carneiros[i])

    if (num_carneiro > 0) {
        carneiros[i] = num_carneiro - 1
    }
    if (num_ataques == i) {
        num_ataques++
    }
    if (num_carneiro % 2 == 1) {
        i++
    } else {
        i--
    }
}

for (let i = 0; i < num_estrelas; i++) {
    carneiros_nao_roubados += parseInt(carneiros[i])
}
let string = `${num_ataques} ${carneiros_nao_roubados}`
console.log(string);