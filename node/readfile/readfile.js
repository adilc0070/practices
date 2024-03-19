let {readFile}=require('fs')
console.log("starting");
readFile("readfile/textfile.txt",'utf8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(res);
    console.log('reading complited');
})
console.log("complited");