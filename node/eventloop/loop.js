console.log("started");
setTimeout(()=>{
    console.log("in loop 9sec");
},9000)

setImmediate(()=>{
    console.log("immidiate ");
})
setTimeout(()=>{
    console.log("in loop 2sec");
},2000)
setTimeout(()=>{
    console.log("in loop 0sec");
},0)
console.log("end");