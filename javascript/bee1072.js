const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const array = lines
let dentro = 0
let fora = 0

if(array[0] < 10000) {
    for(let i = 1; i <= array[0]; i++) {
        if(array[i] >= 10 && array[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
} else {
    console.log("Numero fora da regra!")
}

console.log(dentro + " in\n" + fora + " out")