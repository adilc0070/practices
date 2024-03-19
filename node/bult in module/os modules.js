let os=require("os")

//info about user of the device
// let user=os.userInfo()
// console.log(user);

//system uptime

let time=os.uptime()
console.log(time);

console.log(`the uptime is ${os.uptime()} seconds`); 

//current os
 const osdeta={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
 }
 console.log(osdeta);