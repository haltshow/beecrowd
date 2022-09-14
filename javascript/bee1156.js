let s = 0
let y = 2 
for(let i = 1; i <= 39; i += 2) {
    if(i === 1) {
        s += 1
    } else {
        s += i/y
        y *= 2
    }
}

console.log(s.toFixed(2))