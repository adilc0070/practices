const{readFile,writeFile}=require('fs')

readFile('bult in module/async/files/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result;
    readFile('bult in module/async/files/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result;
        writeFile('bult in module/async/files/nwe/result.txt',`here is the res: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })

    })
    
})

