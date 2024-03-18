//deepCopy : it is used to create a deep copy of an object
//it is used to create a new object with all the properties of the original object
//it take the original object as an argument and returns a new object with all the properties of the original object
//it completely a duplicate of the original object


let orginal={
    name:"rishal",
    age:22,
    address:{
        city:"delhi",
        state:"delhi"
    }
}

let copy=JSON.parse(JSON.stringify(orginal))
copy.name="rahul"
copy.address.city="mumbai"

console.log(copy);
console.log(orginal);
