let person={
    name:"name1",
    age:18
}
console.log("orginal "+'\n');
console.log(person)


let newPerson=person
console.log("duplicate "+'\n');
console.log(newPerson);
console.log("orginal ");
console.log(person);



newPerson.age=20,newPerson.name="as"
    
    

console.log("copied changes  "+'\n');
console.log(newPerson);
console.log("orginal ");
console.log(person);


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