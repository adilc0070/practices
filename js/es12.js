// // replaceAll
// let a = 'this is a new method released on 2021 this is from es12';
// let modifiedString = a.replaceAll('this is', 'this was');
// console.log(modifiedString);


// //logical Assignment opperator
//     //the value contain any falsy value it will change after using this oprator
//     // ||=, ??=, &&=
//     // in this case of &&= this oprator the truethy value conatin time it change
// let nu=null
// console.log(nu);
// nu??="as"
// console.log(nu);

// //numeric separator
// //when we using underscore as a seperator in numbers it make more readeble
// let a=1_8
// console.log(a);


// //promise.any
// // promise is a eventual completion or fail of an a asyncronos operation in the case of any any

// one promise  resoleve the 
// let promise1=new Promise((resolve,reject)=>{
//     let mark=Math.floor(Math.random()*100)
//     if(mark>24) resolve('p1 passed')
//     else reject('p1 failed')
// })
// let promise2=new Promise((resolve,reject)=>{
//     let mark=Math.floor(Math.random()*100)
//     if(mark>24) resolve('p2 passed')
//     else reject('p2 failed')
// })
// let promise3=new Promise((resolve,reject)=>{
//     let mark=Math.floor(Math.random()*100)
//     if(mark>24) resolve('p3 passed')
//     else reject('p3 failed')
// })


// let promis=Promise.any([promise1,promise2,promise3])
// promis.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// //weekRef
// let obj = { data: "Hello" };
// let weakRef = new WeakRef(obj);

// let retrievedObj = weakRef.deref();

// console.log(retrievedObj);

// obj = null;

// console.log(weakRef.deref());
// console.log(retrievedObj);
// console.log(obj);


// //logical operator in optional chaining
// let obj = {
//     name: "adil",
//     age: 20,
//     address: {
//         city: "malappuram",
//         state: "kerala"
//     }
// }
// // let citi = obj.address?.city && 'city is not provided'
// // let post = obj.address?.post || 'post is not provided'
// // console.log(post)

// let state=obj?.["address"]?.state
// console.log(state);


