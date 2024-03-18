let eventEmiter=require('events')

let emit=new eventEmiter()
emit.on("click",(ara,ara1)=>{
    console.log(ara,ara1);
})
emit.off('click')

emit.emit("click","adil","ADIL")
