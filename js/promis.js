let pro=new Promise((resolve,reject)=>{
    let practical=Math.round(Math.random()*10)
    let teory=Math.round(Math.random()*10)
    if(practical<5&&teory<5){
        reject(`review falid p: ${practical} t: ${teory}`)
    }else if(practical>5&&teory>5) resolve(`success passed in your exam p: ${practical} t: ${teory}`)
}).then((res)=>console.log(`suuuui ${res}`)).catch((err)=>console.log(err)).finally(()=>console.log('completed'))