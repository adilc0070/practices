let pro=new Promise((resolve,reject)=>{
    let mark=Math.round(Math.random()*100)
    if(mark<24){
        reject(`exam failed ${mark}`)
    }else resolve(`success passed in your exam ${mark}`)
}).then((res)=>console.log(res)).catch((err)=>console.log(err))