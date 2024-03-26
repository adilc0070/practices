function debounce(funct,dellay){
    let timer=null
    return ()=>{
        timer=setTimeout(()=>{
            funct()
        },dellay)
    }
}


function hello(){
    console.log("after a long time")
}

let a=debounce(hello,5000)
a()