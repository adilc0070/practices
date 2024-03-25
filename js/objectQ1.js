let arr = [
    { type: "inc", amount: 100 },
    { type: "dinc", amount: 50 },
    { type: "dinc", amount: 90 },
    { type: "inc", amount: 56 }
]
let a = arr.reduce((sum, val) => {
    return val.type == 'inc' ? sum += val.amount : sum -= val.amount
}, 0)
console.log(a);