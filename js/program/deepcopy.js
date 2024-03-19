
// const a={
//     apple:2,
//     orange:1,
//     veg:{
//        carrot:5
//     }

// }
// const b=JSON.parse(JSON.stringify(a))
// b.apple=4
// b.veg.carrot=10
// console.log(a)
// console.log(b)

const a={
    apple:2,
    banana:3,
    veg:{
        carrot:4
    }
}
const b=JSON.parse(JSON.stringify(a))
b.apple=4
b.veg.carrot=5
console.log(a);
console.log(b);
let c={...a}
c.apple=5,c.banana=9,c.veg.carrot=2
console.log(c);