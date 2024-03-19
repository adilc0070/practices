let array=[1,2,3,4,5]

let sum1=array.reduce(function add(sum,num){
     sum=sum+num
     return sum
},0)
console.log(sum1);