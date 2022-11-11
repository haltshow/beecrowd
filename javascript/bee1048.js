const input = require("fs").readFileSync("stdin", "utf-8")
const lines = input.split(" ")

let salario = Number(lines.shift())
let percentual
let reajuste
let novoSalario

if(salario >= 0 && salario <= 400) {
    percentual = 15
    reajuste = salario * percentual / 100
    novoSalario = salario + reajuste
    console.log("Novo salario: " + novoSalario.toFixed(2) + "\nReajuste ganho: " + reajuste.toFixed(2) + "\nEm percentual: " + percentual + " %")
} else if(salario > 400  && salario <= 800){
    percentual = 12
    reajuste = salario * percentual / 100
    novoSalario = salario + reajuste
    console.log("Novo salario: " + novoSalario.toFixed(2) + "\nReajuste ganho: " + reajuste.toFixed(2) + "\nEm percentual: " + percentual + " %")
} else if(salario > 800 && salario <= 1200) {
    percentual = 10
    reajuste = salario * percentual / 100
    novoSalario = salario + reajuste
    console.log("Novo salario: " + novoSalario.toFixed(2) + "\nReajuste ganho: " + reajuste.toFixed(2) + "\nEm percentual: " + percentual + " %")
} else if(salario > 1200 && salario <= 2000) {
    percentual = 7
    reajuste = salario * percentual / 100
    novoSalario = salario + reajuste
    console.log("Novo salario: " + novoSalario.toFixed(2) + "\nReajuste ganho: " + reajuste.toFixed(2) + "\nEm percentual: " + percentual + " %")
} else {
    percentual = 4
    reajuste = salario * percentual / 100
    novoSalario = salario + reajuste
    console.log("Novo salario: " + novoSalario.toFixed(2) + "\nReajuste ganho: " + reajuste.toFixed(2) + "\nEm percentual: " + percentual + " %")
}