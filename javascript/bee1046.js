const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const inicio = Number(lines.shift())
const fim = Number(lines.shift())
var resultado

if(inicio > fim) {
    resultado = 24 - inicio + fim
    console.log("O JOGO DUROU " + resultado + " HORA(S)")
} else if(inicio < fim){
    resultado = fim - inicio
    console.log("O JOGO DUROU " + resultado + " HORA(S)")
} else {
    console.log("O JOGO DUROU 24 HORA(S)")
}