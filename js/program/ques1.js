const array = [
  { name: "nishad", age: 20 },
  { name: "ali", age: 30 },
  { name: "jack", age: 40 },
  { name: "lilli", age: 30 },
];

let ageSum = 0;
for (let person of array) {
  if (person.name.includes("li")) {
    ageSum += person.age;
  }
}

console.log(ageSum);