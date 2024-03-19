const http=require('http')

let server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("heloo")
    }
    if(req.url=='/home'){
        res.write("heee")
    }
})

server.listen(6001)