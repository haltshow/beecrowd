const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

const valor_antigo = parseFloat(lines[0]);
const valor_novo = parseFloat(lines[1]);

const diff = valor_novo - valor_antigo;

if (diff >= 0) {
    const result = (diff / valor_antigo) * 100
    console.log(result.toFixed(2) + '%')
}