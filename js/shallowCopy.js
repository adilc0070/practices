let orginal={
    name:"rishal",
    age:22,
    address:{
        city:"delhi",
        state:"delhi"
    }
}

// let copy=Object.assign({},orginal)
// copy.name="rahul"
// copy.address.city="mumbai"
// console.log(copy)
// console.log(orginal);


//another methode for shallow
let copppy={...orginal}
copppy.name="adil"
copppy.address.state='kerala'
console.log(copppy);
console.log(orginal);

//definition of shallow copy: 
// shallow copy: a new object is created and all the properties of the original object are copied to it. The properties which are objects are copied by reference, not by value.
