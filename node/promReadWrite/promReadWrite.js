let {readFile,writeFile}=require('fs')

let promi=new Promise((resolve,reject)=>{
    let num=Math.round(Math.random()*10)
    if(num%2==0){
        resolve(readFile("promReadWrite/text.txt",'utf8',(err,res)=>{
            if(err){
                console.log(err);
            }
            writeFile('promReadWrite/result.txt',res,(err,res)=>{
                if(err){
                    console.log(err);
                }
                console.log("write done");
            })
        }))
    }
})

// promi.then((res)=>{console.log()}).catch((err)=>{console.log(err)})

async function dis(){
    try{
        let resa=await promi
        
    }catch(error){
        console.log(error);
    }
}

dis()