const a=new Promise((resolve,reject)=>{
    const mark=Math.floor(Math.random()*80)
    if(mark>24)
       resolve("passed")
    else
       reject("failed")
})
a.then((res)=>console.log(res)).catch((err)=>console.log(err))

