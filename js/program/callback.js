// function greet(sayGoodbye) {
//     sayGoodbye();
//   }
  
//   function sayGoodbye() {
//     var a = 1;
//     console.log(a);
//   }
  
//   greet(sayGoodbye);
  


 function aa(callback){
  setTimeout(function() {
    callback();
  }, 3000);
  console.log("aa");
    

  }

    function bb(){
     setTimeout(()=>{console.log("bb");},0)
  }

   aa(bb)


// function simulateAsyncEvent(callback) {
//   console.log("Simulating an asynchronous event...");
//   setTimeout(function() {
//       callback();
//   }, 0);
// }

// function afterAsyncEvent() {
//   console.log("Callback executed after the asynchronous event.");
// }

// simulateAsyncEvent(afterAsyncEvent);
// console.log("After calling simulateAsyncEvent");
