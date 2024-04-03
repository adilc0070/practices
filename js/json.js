let obj={
    name: "John Doe",
  age: 30,
  isStudent: false,
  favoriteFruits: ["apple", "banana", "orange"],
  address: {
    city: "New York",
    zipCode: "10001"
  },
  spouse: null
}
let arr=[1.2,34,5.7,9]
arr.sort()
console.log(JSON.stringify(obj,null,2));