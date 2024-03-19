let aa=new Promise((resolve,reject)=>{
    let a=2
    if(a%2==0)
    {
        resolve("p1 passed")
    }else{
        reject("p1 failed")
    }

})
let ab=new Promise((resolve,reject)=>{
    let a=50
    if(a%2==0)
    {
        resolve("p2 passed")
    }else{
        reject("p2 failed")
    }

})
let ac=new Promise((resolve,reject)=>{
    let a=50
    if(a%2==0)
    {
        resolve("p3 passed")
    }else{
        reject("p3 failed")
    }

})
let ad=Promise.all([aa,ab,ac])
ad.then(()=>console.log("success")).catch(()=>console.log("promis fail"))