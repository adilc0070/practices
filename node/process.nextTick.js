// console.log('Before nextTick');

// process.nextTick(() => {
//     console.log('In nextTick');
// });

// console.log('After nextTick');

// //it means that the code will be executed after the current code, but before the next event loop
// function sleep(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }

//   sleep(1000).then(() => {
//     console.log('After 1s');
//   })

function call() {
    console.log('call function')
}

function secondCall() {
    console.log('call function 2')
}
function thirdCall() {
    console.log('call function 3')
}

console.log('Before nextTick');
process.nextTick(call, secondCall, thirdCall)
process.nextTick(secondCall)
process.nextTick(thirdCall)

console.log('After nextTick');

call()
secondCall()
thirdCall()