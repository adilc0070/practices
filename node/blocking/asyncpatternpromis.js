
let {readFile,writeFile}=require('fs')

let getT=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(error,data)=>{
            if(error){reject(error)}
            else{
                resolve(data);
            }
        })
    })
}

let copp=(dat,pattt)=>writeFile(pattt,`here is the res:${dat}`,(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    
    console.log('done the task');
})

getT("blocking/files/test,txt")
    .then(ress=>{copp(ress,'blocking/files/writt.txt')
    console.log(`haa ${ress}`)})
    .catch(errr=>console.log(errr))


let start=async ()=>{
    try{
        let fir=await getT('blocking/files/test,txt')
        copp(fir,'blocking/files/sec.txt')
        console.log(fir);
    }catch(error){
        console.log(error);
    }
}
start()