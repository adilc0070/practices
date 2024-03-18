let person = {
    name: "John",
    age: 30
};

let work = {
    job: "teacher",
    salary: 1000
};

let newPerson = Object.assign(person, work);
console.log(newPerson)