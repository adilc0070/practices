const inp=require('readline-sync')
const size=inp.question("enter the size of array")
let array=[]
for(i=0;i<size;i++){
    array[i]=parseInt(inp.question("enter element :"))
}
console.log(array);
let sumOfElement=array.reduce((sum,it)=>{
    sum =sum + it
    return sum
},0)
console.log(sumOfElement);
let sumOfelEment=0
for(const x of array){
    sumOfelEment=sumOfelEment+x
}
console.log(sumOfelEment);