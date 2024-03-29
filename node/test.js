let {readFile}=require('fs')
readFile('node/test.txt','utf-8',(err,dat)=>{
    if(err){
        return err
    }
    console.log(dat);
})
for(let i=0;i<100000;i++){
    console.log(i);
}
