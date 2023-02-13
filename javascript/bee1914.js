const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let rep = lines.shift()

for (let i = 0; i < rep; i++) { 
    let soma = 0
    let linhaNome = lines.shift().split(" ")
    let linhaNumero = lines.shift().split(" ")
    let jogadorPar = ""
    let jogadorImpar = ""
    
    if (linhaNome[1] == "PAR") {
        jogadorPar = linhaNome[0]
        jogadorImpar = linhaNome[2]
    } else {
        jogadorPar = linhaNome[2]
        jogadorImpar = linhaNome[0]
    }

    soma = parseInt(linhaNumero[0]) + parseInt(linhaNumero[1])

    if (soma % 2 == 0) {
        console.log(jogadorPar)
    } else {
        console.log(jogadorImpar)
    }
}