const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let par  = []
let impar = []

for(let i = 0; i < 15; i++) {
    if(Number(lines[i]) % 2 == 0) {
        par.push(Number(lines[i]))
        if(par.length == 5) {
            for(let y = 0; y < par.length; y++) {
                console.log(`par[${y}] = ${Number(par[y])}`)
            }
            par = []
        }
    } else {
        impar.push(Number(lines[i]))
        if(impar.length == 5) {
            for(let y = 0; y < impar.length; y++) {
                console.log(`impar[${y}] = ${Number(impar[y])}`)
            }
            impar = []
        }
    }
}

if(impar.length) {
    for(let y = 0; y < impar.length; y++) {
        console.log(`impar[${y}] = ${Number(impar[y])}`)
    }
}
if(par.length) {
    for(let y = 0; y < par.length; y++) {
        console.log(`par[${y}] = ${Number(par[y])}`)
    }
}