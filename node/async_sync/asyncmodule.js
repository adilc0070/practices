const{readFile,writeFile}=require('fs')

console.log('start');

readFile('bult in module/async/files/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result;
    console.log('first completed');
    readFile('bult in module/async/files/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result;
        console.log('second completed');

        writeFile('bult in module/async/files/nwe/result.txt',`here is the res: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            
            console.log('done the task');
        })

    })
    
})

console.log('starting next');

