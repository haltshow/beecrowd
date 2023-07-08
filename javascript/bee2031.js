const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let i = 1

while (lines[i]) {
    const escolha1 = lines[i].trim()
    const escolha2 = lines[i+1].trim()

    if (escolha1 === escolha2) {
        if (escolha1 === 'ataque') {
            console.log("Aniquilacao mutua");
        } else if (escolha1 === 'pedra') {
            console.log("Sem ganhador");
        } else if (escolha1 === 'papel') {
            console.log("Ambos venceram");
        }
    } else if (
        (escolha1 === 'ataque' && escolha2 === 'pedra') || (escolha1 === 'ataque' && escolha2 === 'papel') || (escolha1 === 'pedra' && escolha2 === 'papel')
    ) {
        console.log("Jogador 1 venceu");
    } else {
        console.log("Jogador 2 venceu");
    }

    i += 2
}