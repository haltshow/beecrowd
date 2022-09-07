const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let n1 = 0
let n2 = 0
let soma = 0

for(let i = 1; i <= lines[0]; i++) {
    const separador = lines[i].split(" ")
    n1 = Number(separador.shift())
    n2 = Number(separador.shift())

    if(n1 > n2) {
        for(let i = n2+1; i < n1; i++) {
            if(i % 2 !== 0) {
                soma += i
            }
        }
        console.log(soma)
    } else if(n1 < n2){
        for(let i = n1+1; i < n2; i++) {
            if(i % 2 !== 0) {
                soma += i
            }
        }
        console.log(soma)
    } else {
        console.log("0")
    }
    soma = 0
}