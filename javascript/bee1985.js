const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const num_linhas = parseInt(lines[0]);
let result = 0

for (let i = 1; i <= num_linhas; i++) {
    const linha = lines[i].split(' ')
    const cod_prod = parseInt(linha[0])
    const qtd_prod = parseInt(linha[1])
   
    if (cod_prod == 1001) {
        result +=  1.50 * qtd_prod
    } else if (cod_prod == 1002) {
        result +=  2.50 * qtd_prod
    } else if (cod_prod == 1003) {
        result +=  3.50 * qtd_prod
    } else if (cod_prod == 1004) {
        result +=  4.50 * qtd_prod
    } else if (cod_prod == 1005) {
        result +=  5.50 * qtd_prod
    }
}

console.log(result.toFixed(2))