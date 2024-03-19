// function add(a,b,c){
//     return a+b+c
// }

// const a=[12,3,4,5,6,7]
// let total=0
// const sum=add.apply(total,a)
// console.log(sum);

// apply
// function max(arr){
//     return Math.max.apply(null,arr)
// }
// const c=[1,2,3,4,5,6,7]
// const s=max(c)
// console.log(s);
const s={
    name:"nishad",
    age:22,
    career:{
        degree:"bca"
    }

}
const b={...s}
b.name="ali"
b.career.degree="cs"
console.log(s);
console.log(b);