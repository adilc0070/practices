let {createReadStream,readFileSync}=require('fs')
const stream=createReadStream('first/stream/readfile/file/text.txt',{highWaterMark:4400,encoding:"utf8"})
stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>console.log(err))
let ht=require('http')

ht.createServer(function(req,res){
    const test=readFileSync('first/stream/readfile/file/text.txt','utf8')
    res.end(test)
})
.listen(3201)