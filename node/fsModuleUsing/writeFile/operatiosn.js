let {readFile,writeFile}=require('fs')

readFile("fsModuleUsing/writeFile/textFiles.txt","utf8",(err,res)=>{
    if(err){
        console.log(err);
    }
    console.log(res);

    writeFile("fsModuleUsing/writeFile/result.txt",res,(err,res)=>{
        if(err){
            console.log(err);
        }
        console.log("done");
    })
})