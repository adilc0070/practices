
// const arr=[1,2,3,4]
// let sum=0
// function add(num){
//     sum=sum+num
   
// }
// arr.forEach(add)
// console.log(sum)



const a=[1,2,3,4,5]

function lg(max,num){
  
  if(num>max){
  max=num
return max}
}
const b=a.reduce(lg)
console.log(b)


const t=[1,2,3,2,1,3,4,5,6,6,4,32,3,4,4,56]
const k=[...new Set(t)]
console.log(k)


const m="hello"
const l=m.split('').reverse().join('')
console.log(l)


let d=setInterval(function a(){
    console.log("hello")
},3000)
clearInterval(d)
console.log("k")