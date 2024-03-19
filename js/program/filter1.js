const arr=[1,2,3,4,55]
function age(x){
    if(x<10)
      return x
}
const a=arr.filter(age)
console.log(a)


let num=[1,2,3,4,5,6,7,8]
let odd=num.filter(x=>x%2!=0)
console.log(odd);
let even=num.filter(x=>x%2==0)
console.log(even);
