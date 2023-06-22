const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const linha = lines.shift().split(' ');
const pulo = parseInt(linha[0]);
const num_canos = parseInt(linha[1]);

const alturas_canos = lines.shift().split(' ');
let ganhou = true
let diff = 0;

for (let i = 0; i < num_canos-1; i++) {
    diff = parseInt(alturas_canos[i+1]) - parseInt(alturas_canos[i])
    diff = diff < 0 ? diff * -1 : diff
    if (diff > pulo) {
        ganhou = false
        break;
    }
}

if (ganhou) {
    console.log("YOU WIN");
} else {
    console.log("GAME OVER")
}