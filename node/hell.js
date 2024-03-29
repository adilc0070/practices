function let(callback){
    setTimeout(()=>callback(callback1),3000)
}

let((callback1)=>setTimeout(()=>callback1(callback2),5000))
