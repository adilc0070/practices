// function deepCopy(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj; // If the value is not an object or is null, return as is
//     }

//     let copy;

//     if (Array.isArray(obj)) {
//         copy = [];
//         for (let i = 0; i < obj.length; i++) {
//             copy[i] = deepCopy(obj[i]);
//         }
//     } else {
//         copy = {};
//         for (const key in obj) {
//             if (obj.hasOwnProperty(key)) {
//                 copy[key] = deepCopy(obj[key]);
//             }
//         }
//     }

//     return copy;
// }

// let person = {
//     name: "name1",
//     age: 18,
//     hobbies: ["reading", "gaming"]
// };
// console.log(person);

// let newPerson = deepCopy(person);
// newPerson.age = 40;
// newPerson.name = "sopy";
// newPerson.hobbies.push("swimming"); // Modify the hobbies array in the newPerson copy

// console.log(newPerson);
// console.log(person);

// let person={
//     name:"orginal",
//     age:5
// }
// console.log(person);

// let newPerson={...person}

// newPerson.name="deep",newPerson.age=10

// console.log(newPerson);

// console.log(person);


// console.log('\n'+'\n')

let humen={
    name:"a",
    nu:2
}

let newHMN=humen
newHMN.name="b"
console.log(newHMN);
console.log(humen);
console.log(Object.entries(humen));
console.log(Object.keys(humen));

// let a=[1,2,3,1,2,3,4,5,6,1,2,3]

// let c=new Set(a)

// console.log(c);
