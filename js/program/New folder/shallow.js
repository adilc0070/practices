let person={
    name:"name1",
    age:18
}
console.log(person)
console.log("orginal "+'\n');


let newPerson=person
console.log(newPerson);
console.log("duplicate "+'\n');

console.log(person);
console.log("orginal ");



newPerson.age=20,newPerson.name="as",newPerson.place="vga"
    
    

console.log(newPerson);
console.log("copied changes  "+'\n');

console.log(person);
console.log("orginal ");


/*
shallow copy using object.assign 

let person = {
    name: "name1",
    age: 18
};
console.log(person);

let newPerson = Object.assign({}, person, { age: 40, name: "sopy" });
console.log(newPerson);
console.log(person);
*/


/*
//using spread oprator

let person = {
    name: "name1",
    age: 18
};
console.log(person);

let newPerson = { ...person, age: 40, name: "sopy" };
console.log(newPerson);
console.log(person);
*/