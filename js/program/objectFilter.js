// const a=[
//   {name:"ali",age:22},
//   {name:"nishad",age:23},
//   {name:"selena",age:99},
//   {name:"gomez",age:24}
// ]
// const b=a.filter(x=>x.name.includes('el'))
// console.log(b);


const a=[
  {name:"ali",age:22},
  {name:"nishad",age:23},
  {name:"selena",age:99},
  {name:"gomez",age:24}
]
const b=a.filter(x=>x.age>22)
console.log(b);