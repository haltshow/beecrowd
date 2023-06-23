const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let i = 0

while (lines[i]) {
    const horario = lines[i].split(':')

    let hora = parseInt(horario[0]) + 1
    let minuto = parseInt(horario[1])

    let diffHora = 0

    let diffTempo = 0

    if (hora >= 8) {
        diffHora = hora - 8
        diffTempo = (diffHora * 60) + minuto
    }

    console.log(`Atraso maximo: ${diffTempo}`)

    i++
}