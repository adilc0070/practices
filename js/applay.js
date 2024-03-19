

// apply passing values like array without object, 

// function pers(name,place){
//    return `${name}  ${place}`
// }
// var a=pers.apply(null,["ADIL","Malappuram"])
// console.log(a);

//------------------------------------------------


// apply passing with object and value like array

// function pers(place){
//    return `${this.name}  ${place}`
// }
// var arra={name:"ADIL"}
// var a=pers.apply(arra,["Malappuram"])
// console.log(a);

//------------------------------------------------


// apply passing array without object 

// // 
// function pers(name,place){
//    return `${name}  ${place}`
// }
// var array1=["ADIL","Malappuram"]
// var a=pers.apply(null,array1)
// console.log(a);

//------------------------------------------------


// apply passing array and object 


// function pers(place){
//    return `${this.name}  ${place}`
// }
// var array1=["Malappuram"]
// var ob={name:"ADIL"}
// var a=pers.apply(ob,array1)
// console.log(a);

//------------------------------------------------
