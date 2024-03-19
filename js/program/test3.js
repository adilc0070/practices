// // bind
// function add(a,b){
//     return a+b
// }
// const s=add.bind(this,12,3)
// console.log(s())

// // apply

// function max(arr)
// {
//     return Math.max.apply(null,arr)
// }
// const a=[1,2,3,43,2,23,4]
// const c=max(a)
// console.log(c);

// // call
// function add(a,b){
//     return a+b
// }
// const s=add.call(this,14,5)
// console.log(s);

function add(total,arr){
    for(const x of arr)
    {total+=x}
    return total
}

let g=0
const c=[1,2,3,4,55]
const v=add.apply(g,c)
console.log(v);