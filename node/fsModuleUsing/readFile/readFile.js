const fs=require('fs')
let readFile=fs.readFile

readFile("fsModuleUsing/readFile/txtTwo.txt",'utf8',(err,res)=>{
    if(err){
        console.log(err);

    }
    console.log(res);
})
