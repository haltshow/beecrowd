const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split(" ");

function unidade(num) {
    if (num == 1) {
        return 'I';
    } else if (num == 2) {
        return 'II';
    } else if (num == 3) {
        return 'III';
    } else if (num == 4) {
        return 'IV';
    } else if (num == 5) {
        return 'V';
    } else if (num == 6) {
        return 'VI';
    } else if (num == 7) {
        return 'VII';
    } else if (num == 8) {
        return 'VIII';
    } else if (num == 9) {
        return 'IX';
    } else {
        return ''
    }
}

function dezena(num) {
    if (num == 1) {
        return 'X';
    } else if (num == 2) {
        return 'XX';
    } else if (num == 3) {
        return 'XXX';
    } else if (num == 4) {
        return 'XL';
    } else if (num == 5) {
        return 'L';
    } else if (num == 6) {
        return 'LX';
    } else if (num == 7) {
        return 'LXX';
    } else if (num == 8) {
        return 'LXXX';
    } else if (num == 9) {
        return 'XC';
    } else {
        return ''
    }
}

function centena(num) {
    if (num == 1) {
        return 'C';
    } else if (num == 2) {
        return 'CC';
    } else if (num == 3) {
        return 'CCC';
    } else if (num == 4) {
        return 'CD';
    } else if (num == 5) {
        return 'D';
    } else if (num == 6) {
        return 'DC';
    } else if (num == 7) {
        return 'DCC';
    } else if (num == 8) {
        return 'DCCC';
    } else if (num == 9) {
        return 'CM';
    } else {
        return ''
    }
}

const num = lines.shift();

let string = ''

let numCopia = num;
let resto = 0;

if (parseInt(num) >= 100 && parseInt(num) <= 999) {
    numCopia = parseInt(num / 100);
    resto = num % 100;
    string += centena(numCopia)
    numCopia = parseInt(resto / 10);
    resto = resto % 10;
    string += dezena(numCopia)
    string += unidade(resto)

} else if (parseInt(num) >= 10 && parseInt(num) <= 99) {
    numCopia = parseInt(num / 10);
    resto = num % 10;
    string += dezena(numCopia)
    string += unidade(resto)

} else if (parseInt(num) >= 1 && parseInt(num) <= 9) {
    string += unidade(num)
}

console.log(string)