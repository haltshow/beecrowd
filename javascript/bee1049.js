var input = require("fs").readFileSync("stdin", "utf-8");
let lines = input.split("\n")

const a = lines.shift()
const b = lines.shift()
const c = lines.shift()

if(a[0] === "v") {
    if(b[0] == "a") {
        if(c[0] == "c") {
            console.log("aguia")
        } else {
            console.log("pomba")
        }
    } else {
        if(c[0] == "o") {
            console.log("homem")
        } else {
            console.log("vaca")
        }
    }
} 

if(a[0] == "i") {
    if(b[0] == "i") {
        if(c[2] == "m") {
            console.log("pulga")
        } else {
            console.log("lagarta")
        }
    } else {
        if(c[0] == "h") {
            console.log("sanguessuga")
        } else {
            console.log("minhoca")
        }
    }
}