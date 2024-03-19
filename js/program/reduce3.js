const a=[1,2,3,4,5,6]
const arr=a.reduce(function add(sum,num){
     sum=sum+num;
     return sum;

},0)
console.log(arr)



