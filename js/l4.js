const inp=require('readline-sync')
let size=inp.question("enter the size of array")
let uarr=[]
for(i=0;i<size;i++){
    uarr[i]=inp.question("enter array element: ")
}
console.log(`array:${uarr}`);

let fltrarry=uarr.filter((num)=>num%2!=0)

console.log(`filterd array:${fltrarry}`);

fltrarry=uarr.filter((num)=>num%2==0)
console.log(`filterd array:${fltrarry}`);

