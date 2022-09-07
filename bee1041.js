const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

const n1 = Number(lines.shift())
const n2 = Number(lines.shift())
const n3 = Number(lines.shift())

if(n1 < n2 && n1 < n3) {
    if(n2 < n3) {
        console.log(n1 + "\n" + n2 + "\n" + n3 + "\n")
    } else {
        console.log(n1 + "\n" + n3 + "\n" + n2 + "\n")
    }
} else if(n2 < n1 && n2 < n3){
    if(n1 < n3) {
        console.log(n2 + "\n" + n1 + "\n" + n3 + "\n")
    } else {
        console.log(n2 + "\n" + n3 + "\n" + n1 + "\n")
    }
} else {
    if(n1 < n2) {
        console.log(n3 + "\n" + n1 + "\n" + n2 + "\n")
    } else {
        console.log(n3 + "\n" + n2 + "\n" + n1 + "\n")
    }
}


console.log(n1 + "\n" + n2 + "\n" + n3)
