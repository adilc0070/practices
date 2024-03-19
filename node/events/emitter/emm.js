let EventEmitter=require('events')
let {readFile,writeFile}=require('fs')
let newEmitter=new EventEmitter


newEmitter.on('coopy',()=>{
    readFile('first/events/text.txt','utf8',(err,dat)=>{
        if(err){
            console.log(err);
        }
        console.log(dat);
    })
})
newEmitter.on('delet',()=>{
    writeFile('first/events/emitter/files/coo.txt',``,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
    })
})
newEmitter.emit('delet')
newEmitter.emit('coopy')

