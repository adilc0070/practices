let pr1=new Promise((resolve,reject)=>{
    let mark=Math.round(Math.random()*100)
    if(mark<24) reject(`faild from 1 ${mark}`)
    else resolve(`success passed from 1 ${mark}`)
})
let pr2=new Promise((resolve,reject)=>{
    let mark=Math.round(Math.random()*100)
    if(mark<24) reject(`faild from 2 ${mark}`)
    else resolve(`success passed from 2 ${mark}`)
})
let pr3=new Promise((resolve,reject)=>{
    let mark=Math.round(Math.random()*100)
    if(mark<24) reject(`faild from 3 ${mark}`)
    else resolve(`success passed from 3 ${mark}`)
})

let promisall=Promise.allSettled([pr1,pr2,pr3])

promisall.then((res)=>console.log(res)).catch((err)=>console.log(err))