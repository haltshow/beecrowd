const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const codigo = Number(lines.shift());
const quantidade = Number(lines.shift());
let valor;

if(codigo == 1) {
    valor = quantidade * 4.00 
} else if(codigo == 2) {
    valor = quantidade * 4.50
} else if(codigo == 3) {
    valor = quantidade * 5.00
} else if(codigo == 4) {
    valor = quantidade * 2.00
} else {
    valor = quantidade * 1.50
}

console.log(`Total: R$ ` + valor.toFixed(2))