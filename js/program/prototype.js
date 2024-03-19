// const a={
//     this.name:"nishad",
//     this.age:22
// }
// const b=new a()
// console.log(a.prototype)

// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();

// // checking the prototype value
// console.log(Person.prototype); // { ... }

// In JavaScript, every function and object has a property named prototype by default.
//  a prototype can be used to add properties and methods to a constructor function.
//  And objects inherit properties and methods from a prototype. 


// function a(){
//     this.name="nishad"
//     this.place="vly"
// }
// a.prototype.city="kerala"
// const b=new a()

// console.log(Function)
function a(){
    this.name="nishad" 
}
a.prototype.age=22
const b=new a()
console.log(a.prototype)