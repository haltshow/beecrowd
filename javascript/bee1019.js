const input = require("fs").readFileSync("stdin", "utf-8");

const lines = input.split(" ")

var tempo = lines.shift()

var horas = parseInt(tempo / 3600)
tempo = tempo % 3600

var minutos = parseInt(tempo / 60)
tempo = tempo % 60

var segundos = tempo

console.log(`${horas}:${minutos}:${segundos}`)
