// const arr=[1,2,3]
// const arr1=[4,5,6]
// const a=arr.concat(arr1)
// console.log(a)

let a=[1,2,3,4,5,6,9]
let c=[2,4,5,6,9,8,2,3]
let b=new Set(a.concat(c))
let d=a.concat(c)
console.log(b);
console.log(d);