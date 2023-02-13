const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let rep = lines.shift()

for (let i = 0; i < rep; i++) {
    let linha = lines.shift().split(" ")
    if(linha[0].trim() == "Thor") {
        console.log("Y")
    } else {
        console.log("N")
    }
}