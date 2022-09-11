const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let n = 0
let alcool = 0
let gasolina = 0
let diesel = 0

for(let i = 0; i < lines.length; i++) {
    n = Number(lines[i])
    if(n === 4) {
        break;
    } else {
        if(n === 1) {
            alcool++
        } else if(n === 2) {
            gasolina++
        } else if(n === 3) {
            diesel++
        }
    }
}

console.log("MUITO OBRIGADO\n" + "Alcool: " + alcool + "\nGasolina: " + gasolina + "\nDiesel: " + diesel)

// n = lines[i]

// while(n !== 4) {
//     i++
//     n = lines[i]
// }