// const a=[

//     { name: "Alice", age: 20, grade: "A" },
//     { name: "Bob", age: 22, grade: "B" },
//     { name: "Charlie", age: 21, grade: "A-" }
  
// ]
// const b=a.map(x=>x.name+"  al")
// console.log(b);
// const a=[

//   { name: "Alice", age: 20, grade: "A" },
//   { name: "Bob", age: 22, grade: "B" },
//   { name: "Charlie", age: 21, grade: "A-" }

// ]
// const b=a.filter(x=>x.age%2==0)
// console.log(b);


// const a=[

//   { name: "Alice", age: 20, grade: "A" },
//   { name: "Bob", age: 22, grade: "B" },
//   { name: "Charlie", age: 21, grade: "A-" }

// ]

// const b=a.reduce((sum,num)=>{
//      sum+=num.age 
//      return sum
// },0)
// console.log(b);

// const a=4
// const c=1
// const b=Math.pow(a,c)
// console.log(b);

// function a(b){
//   b()
// }
// function b(){
//   var o=1
//   console.log(o);
// }
// a(b)

for(const x in a){
  console.log(x+" "+a[x]);
}