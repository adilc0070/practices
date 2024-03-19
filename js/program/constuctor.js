const arr="hellp"
let text=arr.constructor
console.log(text)
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Adding a method to the prototype
// Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// Creating instances using the constructor function
// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// Using the methods attached to the prototype
// person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
// person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.

function pe(name,place){
    this.gdname=name
    this.place=place
}
pe.prototype.despl=function(){
    console.log(`${this.gdname} came from ${this.place}`);

}

let a=new pe("adil","malappuram")
a.despl()