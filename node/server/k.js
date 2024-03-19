let htt=require('http')

let server=htt.createServer()

server.on('hello',(req,res)=>{
    res.end("hello pade")
})

server.listen(9000)