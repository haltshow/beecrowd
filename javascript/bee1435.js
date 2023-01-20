const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let menorDistancia = 0
let distanciaColuna = 0
let distanciaLinha = 0
let texto = ""

for(let cont = 0; cont < lines.length; cont++) {
    if(Number(lines[cont]) === 0) {
        break;
    }
    texto = ""
    for(let i = 0; i < lines[cont]; i++) {
        for(let j = 0; j < lines[cont]; j++) {
            distanciaLinha = parseInt(i)
            if(distanciaLinha > parseInt(lines[cont]-i-1)) {
                distanciaLinha = parseInt(lines[cont]-i-1)
            } 

            distanciaColuna = j
            if(j > lines[cont]-j-1){
                distanciaColuna = parseInt(lines[cont]-j-1)
            }
            
            if(distanciaLinha < distanciaColuna) {
                menorDistancia = parseInt(distanciaLinha)
            } else {
                menorDistancia = parseInt(distanciaColuna)
            }

            menorDistancia++
            
           
            if(menorDistancia >= 10){
                texto += `  ${menorDistancia}`
            } else {
                texto += `   ${menorDistancia}`
            }
            
        }
        
        texto += '\n'
        
    }
    console.log(texto)
}