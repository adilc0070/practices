let _ =require('lodash')

const arr=[1,[2,[3,[4,[5]]]],[6]]
let n=_.flattenDeep(arr)
console.log(n);

