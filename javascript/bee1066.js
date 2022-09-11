const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

const a = Number(lines.shift())
const b = Number(lines.shift())
const c = Number(lines.shift())
const d = Number(lines.shift())
const e = Number(lines.shift())

let par = 0
let impar = 0
let pos = 0
let neg = 0

if(a % 2 === 0) {
    par++
    if(a > 0) {
        pos++
    } else if(a < 0){
        neg++
    }
} else {
    impar++
    if(a > 0) {
        pos++
    } else if(a < 0){
        neg++
    }
}

if(b % 2 === 0) {
    par++
    if(b > 0) {
        pos++
    } else if(b < 0){
        neg++
    }
} else {
    impar++
    if(b > 0) {
        pos++
    } else if(b < 0){
        neg++
    }
}

if(c % 2 === 0) {
    par++
    if(c > 0) {
        pos++
    } else if(c < 0){
        neg++
    }
} else {
    impar++
    if(c > 0) {
        pos++
    } else if(c < 0){
        neg++
    }
}

if(d % 2 === 0) {
    par++
    if(d > 0) {
        pos++
    } else if(d < 0){
        neg++
    }
} else {
    impar++
    if(d > 0) {
        pos++
    } else if(d < 0){
        neg++
    }
}

if(e % 2 === 0) {
    par++
    if(e > 0) {
        pos++
    } else if(e < 0){
        neg++
    }
} else {
    impar++
    if(e > 0) {
        pos++
    } else if(e < 0){
        neg++
    }
}

console.log(par + " valor(es) par(es)\n" + impar + " valor(es) impar(es)\n" + pos + " valor(es) positivo(s)\n" + neg + " valor(es) negativo(s)")