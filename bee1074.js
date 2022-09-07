const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const array = lines

if(Number(array[0]) < 1000) {
    for(let i = 1; i <= Number(array[0]); i++) {
        if(Number(array[i]) > 0 && Number(array[i]) % 2 === 0) {
            console.log("EVEN POSITIVE")
        } else if(Number(array[i]) > 0 && Number(array[i]) % 2 !== 0) {
            console.log("ODD POSITIVE")
        } else if(Number(array[i]) === 0) {
            console.log("NULL")
        } else if(Number(array[i]) < 0 && Number(array[i]) % 2 === 0) {
            console.log("EVEN NEGATIVE")
        } else if(Number(array[i]) < 0 && Number(array[i]) % 2 !== 0) {
            console.log("ODD NEGATIVE")
        }
    }
} else {
    console.log("Número fora da regra")
}