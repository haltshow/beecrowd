const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let n1 = 0
let n2 = 0
let soma = 0
let texto = ""

for(let i = 0; i < lines.length; i++) {
    const separador = lines[i].split(" ")
    n1 = Number(separador.shift())
    n2 = Number(separador.shift())

    if(n1 > 0 && n2 > 0) {
        if(n1 > n2) {
            for(let y = n2; y <= n1; y++) {
                soma += y
                texto += y + " "
            }
            texto += "Sum=" + soma
            console.log(texto)
        } else {
            for(let y = n1; y <= n2; y++) {
                soma += y
                texto += y + " "
            }
            texto += "Sum=" + soma
            console.log(texto)
        }
        soma = 0
        texto = ""
    } else {
        break;
    }
}