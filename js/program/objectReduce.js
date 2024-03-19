// const a=[
//   {name:"ali",age:22},
//   {name:"nishad",age:23},
//   {name:"selena",age:99},
//   {name:"gomez",age:24}
// ]
// const b=a.reduce((sum,num)=>sum+=num.age,0)
// console.log(b);
const a=[
  {name:"ali",age:22},
  {name:"nishad",age:23},
  {name:"selena",age:99},
  {name:"gomez",age:24}
]
const b=a.reduce((max,num)=>(num.age>max ? num.age:max),0)

console.log(b);