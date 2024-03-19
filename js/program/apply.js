// function sum(a, b, c) {
//     return a + b + c;
// }
// let total=0
// const numbers = [1, 2, 3];
// const result = sum.apply(total,numbers)

// console.log(result); // Output: 6

function largest(arr){
    return Math.max.apply(null,arr)
}
const c=[1,2,3,4,5]
const b=largest(c)
console.log(b);