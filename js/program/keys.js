
// without using for in

// const arr={name:"nishad",
// age:22}
// const a=Object.keys(arr)
// console.log(a)

// using for in

const arr={name:"nishad",age:20}
for(const key in arr){
    console.log(key)
}

const a=[{name:"nishad",age:20},{name:"mary",age:24},{name:"gg",age:22},{name:"dd",age:21}]
for(const key of a){
    console.log(Object.keys(key))
}
const c=a.map(x=>Object.values(x))
console.log(c);
