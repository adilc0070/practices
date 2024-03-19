// const numbers=[1,2,3,4,5,6]
// let sum=0
// numbers.forEach(function add(num){
//     sum=sum+num
//     return sum
// })
// console.log(sum)
const c=[1,11,2,3,40,,5,6,,15]
let max=c[0]
c.forEach(function large(num){
    
    if(num>max){
        max=num
    }return max
})
console.log(max);
// let a=c.map(x=>x*2)
// console.log(a);



let ac=c.forEach((num,index) => {
    
        console.log (`${index},${num}`);
    
});


