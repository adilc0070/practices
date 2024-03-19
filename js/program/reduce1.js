const a=[1,2,3,4,5];
const arr=a.reduce(function largest(max,num)
{
    if(num>max){
        max=num;
        return max;
    }

},0)
console.log(arr)
console.log(a)