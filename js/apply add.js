function addition(total,arr){
    for(const x of arr){
        total+=x
    }
    return total
}
const inp=require('readline-sync')
let a=inp.question("enter size")
let ars=[]
for(i=0;i<a;i++){
    ars[i]=parseInt(inp.question("enter values: "))
}

let totl=0

var cv=addition.apply(null,[totl,ars])
console.log(cv);