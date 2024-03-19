let size=6
let a=[]
for(i=0;i<size;i++){
    a[i]=Math.round(Math.random()*100)
}

console.log(a);

a.sort((a,b)=>a-b)
console.log(a);


let large=Math.max(...a)
console.log(large);

let small=Math.min(...a)
console.log(small);

let odd=a.filter(num=>num%2!=0)
console.log(odd);

let even=a.filter(num=>num%3==0)
console.log(even);

console.log(a);
