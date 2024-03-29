let weakMap=new WeakMap()

let obj={name:"weeak1"}
let obj1={name:"weeak2"}
let obj2={name:"weeak3"}

weakMap.set(obj,'hellow')
console.log(weakMap.get(obj))
weakMap.set(obj2,obj)

console.log(weakMap.get(obj2));