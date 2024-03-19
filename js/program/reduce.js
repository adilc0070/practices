const arr=[1,2,3,4,5];
const arr1=arr.reduce(function add(sum,num){
    sum=sum+num;
    return sum;
},0)
console.log(arr1)