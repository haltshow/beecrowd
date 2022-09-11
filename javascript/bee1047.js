const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

let hora_inicio = Number(lines.shift())
let minutos_inicio = Number(lines.shift())
let hora_fim = Number(lines.shift())
let minutos_fim = Number(lines.shift())
var resultado_horas
var resultado_minutos

if(hora_inicio < hora_fim) {
    resultado_horas = hora_fim - hora_inicio
    if(minutos_inicio < minutos_fim) {
        resultado_minutos = minutos_fim - minutos_inicio
        console.log("O JOGO DUROU " + resultado_horas + " HORA(S)" + " E " + resultado_minutos + " MINUTO(S)")
    } else if(minutos_inicio > minutos_fim) {
        resultado_minutos = (60 - minutos_inicio) + minutos_fim
        resultado_horas--
        console.log("O JOGO DUROU " + resultado_horas + " HORA(S)" + " E " + resultado_minutos + " MINUTO(S)")
    } else {
        resultado_minutos = 0
        console.log("O JOGO DUROU " + resultado_horas + " HORA(S)" + " E " + resultado_minutos + " MINUTO(S)")
    }
} else if(hora_inicio > hora_fim) {
    resultado_horas = (24 - hora_inicio) + hora_fim
    if(minutos_inicio < minutos_fim) {
        resultado_minutos = minutos_fim - minutos_inicio
        console.log("O JOGO DUROU " + resultado_horas + " HORA(S)" + " E " + resultado_minutos + " MINUTO(S)")
    } else if(minutos_inicio > minutos_fim){
        resultado_minutos = (60 - minutos_inicio) + minutos_fim
        resultado_horas--
        console.log("O JOGO DUROU " + resultado_horas + " HORA(S)" + " E " + resultado_minutos + " MINUTO(S)")
    } else {
        resultado_minutos = 0
        console.log("O JOGO DUROU " + resultado_horas + " HORA(S)" + " E " + resultado_minutos + " MINUTO(S)")
    }
} else {
    if(minutos_inicio == minutos_fim) {
        console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
    } else if(minutos_inicio > minutos_fim){
        resultado_minutos = (60 - minutos_inicio) + minutos_fim
        console.log("O JOGO DUROU 23 HORA(S) E " + resultado_minutos + " MINUTO(S)")
    } else {
        resultado_minutos = minutos_fim - minutos_inicio
        console.log("O JOGO DUROU 0 HORA(S) E " + resultado_minutos + " MINUTO(S)")
    }
}