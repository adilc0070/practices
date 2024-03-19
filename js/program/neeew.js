let student=[{name:"a",age:10},{name:"b",age:11}]
let flt=student.filter((x)=>x.age<11)
console.log(flt);
let mp=student.map(nu=>nu.age+1)
console.log(mp);