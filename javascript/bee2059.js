const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const p = parseInt(lines[0])
const j1 = parseInt(lines[1])
const j2 = parseInt(lines[2])
const r = parseInt(lines[3])
const a = parseInt(lines[4])

if (r == 1 && a == 0) {
    console.log("Jogador 1 ganha!")
} else if (r == 1 && a == 1) {
    console.log("Jogador 2 ganha!")
} else if (r == 0 && a == 1){
    console.log("Jogador 1 ganha!")
} else {
    const soma = j1 + j2;
    if (p == 1) {
        if (soma % 2 == 0) {
            console.log("Jogador 1 ganha!")
        } else {
            console.log("Jogador 2 ganha!")
        }
    } else {
        if (soma % 2 == 0) {
            console.log("Jogador 2 ganha!")
        } else {
            console.log("Jogador 1 ganha!")
        }
    }
}