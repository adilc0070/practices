const a=new Promise((resolve,reject)=>{
    const mark=Math.floor(Math.random()*80)
    if(mark>24){
        resolve("passed")
    }
    else{
        reject("failed")
    }
})

async function exe(){
    try{
        const result=await a;
        console.log(result);
    }
    catch(error){
        console.log(error)

    }
}
exe()