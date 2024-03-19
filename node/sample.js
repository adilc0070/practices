
let ht=require("http")
let a=require("fs")

ht.createServer(function(req,res){
    if(req.url==='/'){
    a.readFile("./files/first.txt",(err,pas)=>{
        if(err){
            res.writeHead(500,{"Content-Type":"text/plain"})
            res.end("network err")
        }
        else{
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.write(pas)
            res.end()
        }

    })}else{
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.end("network err")

    }
}).listen(8080)
console.log("check the port");
console.log("hello");