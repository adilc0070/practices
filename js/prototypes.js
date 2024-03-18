// let object = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//     key4: "value4",
//     method: function () {
//         console.log('this is a method');
//     }
// }


// //example for prototype
// Object.prototype.key5 = "value5";

// console.log(object.key5);
// let isFrozen = Object.isFrozen(object)
// console.log(isFrozen)

// //what is prototype in js:
// //prototype is an object that is used to link methods and properties of one object to another. 
// //It is used to inherit properties and methods from another object. 
// //In simple english: prototype is used to inherit properties and methods from another object
// //example:

// let animal = {
//     eat: function(){
//         console.log("animal is eating")
//     }
// }

// let dog = {
//     name:"peter"
// }

// dog.__proto__ = animal; //linking dog object to animal object using prototype

// console.log(dog.eat());//prints "animal is eating"

// //use cases of prototype:
// // 1. To inherit properties and methods from another object
// // 2. To implement polymorphism in javascript
let person = {
    name: "adil",
    age: 20
}
let work = {
    work: function () {
        console.log("working");
    }
}

person.__proto__ = work;
person.work()   