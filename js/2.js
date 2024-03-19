var read=require('readline-sync')
const size=read.question("enter the size of array")
let arra=[]
for(i=0;i<size;i++){
    arra[i]=read.question("enter"+size+" values")
}
console.log("enterd array is :\n\t" +arra)
const revarray=arra.reverse()
console.log("reversed array \n\t"+revarray);
var temp
for(i=0;i<size;i++){
    temp=arra[i]
    arra[i]=arra[size]
    arra[size]=temp
}
console.log("enterd array is :\n\t" +arra)
