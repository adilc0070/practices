// const original={
//       apple:3,
     
//        veg:{
//         a:2,
//        }
      

// }
// const shallow=Object.assign({},original)
// shallow.veg.a=3
// shallow.apple=5
// console.log(original)
// console.log(shallow);


const a={
    apple:3,
    veg:{
        carrot:4
    }
}
const b={...a};
b.apple=1;
b.veg.carrot=0;
console.log(a)
console.log(b)