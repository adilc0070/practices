let seeet=new WeakSet()

let obj={name:"weak1"}
let obj1={name:"weak2"}
let obj2={name:"weak3"}

seeet.add(obj)
console.log(seeet.has(obj));
seeet.add(obj1)
obj.a='adilll'
// seeet.add(obj)
console.log(obj);
console.log(seeet.has(obj));