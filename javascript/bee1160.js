const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let cont = 0

for(let i = 1; i <= lines[0]; i++) {
    const separador = lines[i].split(" ")
    pa = Number(separador[0])
    pb = Number(separador[1])
    g1 = Number(separador[2])/100
    g2 = Number(separador[3])/100

    while(pa <= pb) {
        cont++
        pa += parseInt(pa * g1)
        pb += parseInt(pb * g2)
        if(cont > 100) {
            console.log("Mais de 1 seculo.")
            break;
        }
    }
    if(cont <= 100){
        console.log(cont + " anos.")
    }
    
    cont = 0
}