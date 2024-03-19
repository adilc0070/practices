const a=[1,2,3,4,5]

function rev(arr){
const length=a.length
for(let i=0;i<arr.length/2;i++){
    const temp=arr[i];
   arr[i]=arr[length-i-1]
   arr[length-i-1]=temp
}

return arr
}
const newRev=rev(a)
console.log(newRev);