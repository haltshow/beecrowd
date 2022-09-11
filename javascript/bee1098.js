let lim = 1
for(let i = 0; i<=2; i+=0.2) {
    for(let j = lim; j <= lim+2; j++) {
        if(i == 0 || i == 1 || i > 1.8) {
            console.log("I=" + i.toFixed() + " J=" + j.toFixed())
        } else {
            console.log("I=" + i.toFixed(1) + " J=" + j.toFixed(1))
        }
    }
    lim += 0.2
}