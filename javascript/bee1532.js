const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

let arrayLength = 0
let texto = ""

for(let i = 0; i < lines.length; i++) {
    arrayLength = lines[i]

    for(let y = 0; y < arrayLength; y++) {
        texto = ""
        for (let z = 0; z < arrayLength; z++) {
            if (arrayLength - 1 - z == y){
                texto += "2"
            } else if(y == z) {
                texto += "1"
            } else {
                texto += "3"
            }
        }
        console.log(texto)
    }
}