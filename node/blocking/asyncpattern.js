const http=require('http')

const port=5328

let server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("home page")
    }
    if (req.url=='/about') {
        //blocking code
        for(i=0;i<50;i++){
            for(j=0;j<1000;j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end("About page")
    }
})

server.listen(port,()=>{
    console.log(`port is ${port}`);
})