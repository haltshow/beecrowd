let lim = 7
for(let i = 1; i <= 9; i+=2) {
    for(let j = lim; j >= lim-2; j--) {
        console.log("I=" + i + " J=" + j)
    }
    lim += 2 
}