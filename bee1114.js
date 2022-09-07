const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let tentativa = 0

for(let i = 0; i < lines.length; i++) {
    tentativa = Number(lines[i])
    if(tentativa === 2002) {
        console.log("Acesso Permitido")
        break;
    } else {
        console.log("Senha Invalida")
    }
}