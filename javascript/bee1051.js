const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ")

let s = Number(lines.shift())
let r

if(s > 0 && s <= 2000) {
    console.log("Isento")
} else if(s > 2000 && s <= 3000) {
    r = (s - 2000) * 8 / 100
    console.log("R$ " + r.toFixed(2))
} else if(s > 3000 && s <= 4500) {
    r = (s - 3000) * 18 / 100
    r += 80
    console.log("R$ " + r.toFixed(2))
} else {
    r = (s - 4500) * 28 / 100
    r += 350
    console.log("R$ " + r.toFixed(2))
}