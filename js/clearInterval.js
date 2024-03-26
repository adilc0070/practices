let timerID = setInterval(() => console.log("hello"), 1500);
let timoutID=setTimeout(()=>console.log('from'),1200)
let tii=setImmediate(()=>console.log('sad'))
// Clear the interval after 4 seconds
let timm=setTimeout(() => {
    clearTimeout(timoutID)
    clearInterval(timerID);
    console.log("Interval cleared after 4 seconds");
}, 1000);



clearImmediate(tii)