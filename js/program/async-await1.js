// A function that returns a Promise that resolves after a given time
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function example1() {
//     console.log("Start");
    
//     await delay(2000); // Wait for 2 seconds
    
//     console.log("After waiting");
// }

// example1();

// The delay function is defined. It takes a single argument ms (milliseconds) and returns a Promise 

// that resolves after the specified time using setTimeout. The resolve function is called inside setTimeout 
// to fulfill the Promise.

// // The example1 function is defined as an async function. This means it will return a Promise, and it can 
// use the await keyword to pause execution until asynchronous operations are completed.

// // Inside the example1 function, the string "Start" is logged to the console.

// // The await keyword is used with the delay function. It tells JavaScript to pause the execution of the 
// function until the Promise returned by delay(2000) resolves. This simulates waiting for 2 seconds without 
// blocking the entire program.

// // After the 2-second delay, the code continues executing, and the string "After waiting" is logged to 
// the console.

// // The example1 function is called at the end with example1(). Since it's an async function, it returns a 
// Promise, but in this case, there's no further handling of the Promise (like using .then() or await), so any
//  errors or resolutions will be silent.

// function delay(s){
//      return new Promise(resolve=>setTimeout(resolve,s))
// }

// async function www(){
//      await delay(3000)
//      console.log("hello");
//        await delay(3000)
//        console.log("hi");
// }
// www()


const a=new Promise((resolve,reject)=>{
     let mark=Math.round(Math.random()*80)
     if(mark>30){
          resolve(`passed mark is: ${mark}`)
     }
     else{
          reject(`Failed mark is: ${mark}`)

     }
})
async function asc(){

     try{
          let res=await a
          console.log(res);
     }
     catch(err){

          console.log(err);
     }
}
asc()
// a.then((res)=>console.log(res)).catch((err)=>console.log(err))