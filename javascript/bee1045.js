const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

let A = Number(lines.shift())
let B = Number(lines.shift())
let C = Number(lines.shift())

if(A < B || A < C) {
    if( B <= C) {
        var variavel = A
        A = C
        C = variavel
    } else {
        var variavel = A
        A = B
        B = variavel
    }
}

if(A >= (B + C)) {
    console.log("NAO FORMA TRIANGULO")
} else if((A * A) == ((B * B) + (C * C))){
    console.log("TRIANGULO RETANGULO")
} else if((A * A) > ((B * B) + (C * C))) {
    console.log("TRIANGULO OBTUSANGULO")
} else if((A * A) < ((B * B) + (C * C))) {
    console.log("TRIANGULO ACUTANGULO")
}

if(A == B && A == C) {
    console.log("TRIANGULO EQUILATERO")
} else if(A == B || A == C || B == C) {
    console.log("TRIANGULO ISOSCELES")
}