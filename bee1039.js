var input = require("fs").readFileSync("stdin", "utf-8");
let lines = input.split("\n")

const lines1 = lines[0].split(' ')

const n1 = Number(lines1[0])
const n2 = Number(lines1[1])
const n3 = Number(lines1[2])
const n4 = Number(lines1[3])
const notaExame = Number(lines[1])

let media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10

console.log("Media: " + media.toFixed(1))

if(media >= 7.0) {
    console.log("Aluno aprovado.")
} else if(media < 5.0) {
    console.log("Aluno reprovado.")
} else {
    console.log("Aluno em exame.")
    console.log("Nota do exame: " + notaExame)
    media = (media + notaExame) / 2
    media = media.toFixed(1)
    if(media >= 5.0) {
        console.log("Aluno aprovado.")
        console.log("Media final: " + media)
    } else {
        console.log("Aluno reprovado.")
        console.log("Media final: " + media)
    }
}