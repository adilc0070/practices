let n= new Promise((resolve,reject)=>{
    let mark=Math.floor(Math.random()*100)

    if(mark>=24){
        resolve("passed"+mark)
    }
    else{
        reject("failed"+mark)
    }
})
n.then((res)=>console.log(res)).catch((err)=>console.log(err))