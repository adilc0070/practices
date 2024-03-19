let htt=require('http')
const portnum=6099
const portnum1=6098
function na(port){
    console.log(`'server listen at port :"${port}"`);
}

let server=htt.createServer((req,res)=>{
    console.log("server working ");
    if(req.url=='/'){
        console.log('on== ?');
        res.end('hello')
    }
    if(req.url=='/home'){
        console.log("server on ==home");
        res.end("you are in home")
    }
    if(req.url=='/home/adil'){
        console.log("server on ==profile");
        res.end('adil')
    }
})
server.listen(portnum,na(portnum))

server2=htt.createServer((req,res)=>{
    console.log("server 2");
    res.end('serr')
})
server2.listen(portnum1,na(portnum1))