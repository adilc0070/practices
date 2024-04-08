function call1(callBack1){
    setTimeout(()=>{
        callBack1()
    },1000)
}
function call2(callBack2){
    setTimeout(()=>{
        callBack2()
    },1000)
}
function call3(ca){
    setTimeout(()=>{
        console.log('displayed');
    },1000)
}

let callbackhell=call1()

