const a = [{ f: 3, l: 9 }, { afd: 4, pl: 2 }, { afdf: 7, ppl: 5 }, { afad: 3, pl: 6 }]

for (let x of a) {
    let aa = Object.values(x)
    for (let index = 0; index < aa[0]; index++) {
        console.log(`${aa[0]} * ${aa[1]} = ${aa[0]*aa[1]}`);
    }
}

