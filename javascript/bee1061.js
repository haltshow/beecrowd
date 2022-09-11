const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split("\n")

let a = lines.shift()
let b = lines.shift()
let c = lines.shift()
let d = lines.shift()


dt_ini = Number(a.split(' ')[1])
dt_fim = Number(c.split(' ')[1])
hr_ini = Number(b.split(' ')[0])
hr_fim = Number(d.split(' ')[0])

let min_ini = Number(b.split(' ')[2])
let min_fim = Number(d.split(' ')[2])
let seg_ini = Number(b.split(' ')[4])
let seg_fim = Number(d.split(' ')[4])

let dias
let horas
let minutos
let segundos

dias = dt_fim - dt_ini 

if(dias !== 0) {
    if(hr_ini > hr_fim) {
        dias--
        horas = (24 - hr_ini) + hr_fim
        if(min_ini > min_fim) {
            horas-- //21
            minutos = (60 - min_ini) + min_fim //59
            if(seg_ini > seg_fim) {
                minutos--
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        } else if(min_ini < min_fim) {
            minutos = min_fim - min_ini
            if(seg_ini > seg_fim) {
                minutos--
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        } else {
            minutos = 0
            if(seg_ini > seg_fim) {
                horas--
                minutos = 59
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        }
    } else if(hr_ini < hr_fim){
        horas = hr_fim - hr_ini
        if(min_ini > min_fim) {
            horas--
            minutos = (60 - min_ini) + min_fim
            if(seg_ini > seg_fim) {
                minutos--
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        } else if(min_ini < min_fim) {
            minutos = min_fim - min_ini
            if(seg_ini > seg_fim) {
                minutos--
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        } else {
            minutos = 0
            if(seg_ini > seg_fim) {
                horas--
                minutos = 59
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        }
    } else {
        horas = 0
        if(min_ini > min_fim) {
            dias--
            horas = 23
            minutos = (60 - min_ini) + min_fim
            if(seg_ini > seg_fim) {
                minutos--
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        } else if(min_ini < min_fim) {
            minutos = min_fim - min_ini
            if(seg_ini > seg_fim) {
                minutos--
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        } else {
            minutos = 0
            if(seg_ini > seg_fim) {
                dias--
                horas = 23
                minutos = 59
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        }
    }
} else {
    if(hr_ini < hr_fim) {
        horas = hr_fim - hr_ini
        if(min_ini > min_fim) {
            horas--
            minutos = (60 - min_ini) + min_fim
            if(seg_ini > seg_fim) {
                minutos--
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        } else if(min_ini < min_fim) {
            minutos = min_fim - min_ini
            if(seg_ini > seg_fim) {
                minutos--
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        } else {
            minutos = 0
            if(seg_ini > seg_fim) {
                horas--
                minutos = 59
                segundos = (60 - seg_ini) + seg_fim
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        }
    } else if(hr_ini == hr_fim) {
        horas = 0
        if(min_ini < min_fim) {
            minutos = min_fim - min_ini
            if(seg_ini > seg_fim) {
                if(minutos > 1){
                    minutos--
                    segundos = (60 - seg_ini) + seg_fim
                    console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
                } else {
                    console.log("Não pode acontecer!")
                }
            } else if(seg_ini < seg_fim) {
                segundos = seg_fim - seg_ini
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            } else {
                segundos = 0
                console.log(dias + " dia(s)\n" + horas + " hora(s)\n" + minutos + " minuto(s)\n" + segundos + " segundo(s)")
            }
        } else {
            console.log("Não pode acontecer")
        }
    } else {
        console.log("Impossível de acontecer!")
    }
}