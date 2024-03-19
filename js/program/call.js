
// call
// The call method is used to invoke a function with a specific this value and any 
// arguments you provide individually (as separate arguments).
// function greet(message) {
//     console.log(`${message}, ${this.name}`);
//   }
  
//   const person = { name: "Alice" };
  
//   greet.call(person, "Hello"); // Outputs: "Hello, Alice"
// //   apply
// //   The apply method is similar to call, but it accepts arguments as an array or array-
// //   like object.
// function greet(message) {
//     console.log(`${message}, ${this.name}`);
//   }
  
//   const person = { name: "Alice" };
  
//   greet.apply(person, ["Hello"]); // Outputs: "Hello, Alice"
// // bind
// // The bind method creates a new function with a fixed this value and optionally pre-set arguments. 
// // The original function is not called immediately but can be invoked later.  
// function greet(message) {
//     console.log(`${message}, ${this.name}`);
//   }
  
//   const person = { name: "Alice" };
//   const greetForAlice = greet.bind(person);
  
//   greetForAlice("Hello"); // Outputs: "Hello, Alice"
  
// function that adds two numbers 
// function sum(a, b) {
//   return a + b;
// }

  
// const result = sum.call(this, 5, 10);
// console.log(result);

//Output:
// 15

// function hello(){
//     console.log(`hello my name is ${this.name}`)
// }

// const person1={name:"nishad"}
// const person2={name:"ali"}
// hello.call(person1)
// hello.call(person2)



// const w={
//     name:"nishad",
//     class:5,
//     qualify:function(){
//         console.log(this.name+" "+this.class)
//     }
// }
// w.qualify();
// let person2={
//     name:"ali",
//     class:6
// }
// let s=w.qualify.bind(person2)
// console.log(s)


// function c(a,b){
//     return a+b
// }

// const d=c.call(this,3,4)
// console.log(d);


function a(sl_num){
    return(`sl_no:${sl_num}\nname: ${this.name}\nplace: ${this.place}`);
}
const ob={
    name:"Adil",
    place:"vengara",
}

let b=a.call(ob,1)
console.log(b);