const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const rep = lines[0]

for (let i = 1; i <= rep; i++) {
    let entr = lines[i].split(' ')
    let esc1 = entr[0].trim()
    let esc2 = entr[1].trim()
    let res = ''

    if(esc1 == esc2) {
        res = 'De novo!'
    } else if ((esc1 == 'pedra') && (esc2 == 'lagarto' || esc2 == 'tesoura')) {
        res = 'Bazinga!'
    } else if ((esc1 == 'papel') && (esc2 == 'pedra' || esc2 == 'Spock')) {
        res = 'Bazinga!'
    } else if ((esc1 == 'tesoura') && (esc2 == 'papel' || esc2 == 'lagarto')) {
        res = 'Bazinga!'
    } else if ((esc1 == 'lagarto') && (esc2 == 'Spock' ||  esc2 == 'papel')) {
        res = 'Bazinga!'
    } else if ((esc1 == 'Spock') && (esc2 == 'tesoura' || esc2 == 'pedra')) {
        res = 'Bazinga!'
    } else {
        res = 'Raj trapaceou!'
    }

    console.log(`Caso #${i}: ${res}`)
}   