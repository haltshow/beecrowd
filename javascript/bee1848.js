const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let string = lines.shift()
let soma = 0

while (string !== undefined) {

    string = string.trim()

    if (string == "caw caw") {
        console.log(soma)
        soma = 0
    } else {
        if (string[0] == "*") {
            soma += 4
        }
        if (string[1] == "*") {
            soma += 2
        }
        if(string[2] == "*") {
            soma += 1
        }
    }

    string = lines.shift()
}