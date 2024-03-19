let {readFile,writeFile}=require('fs')
let util=require('util')
let readFilePromise=util.promisify(readFile)
let writeFilePromise=util.promisify(writeFile)

let start=async()=>{
    try{
        let first=await readFilePromise('promisfy/files/first.txt','utf8')
        let second=await getText('promisfy/files/second.txt')
        await writeFilePromise('promisfy/files/result.txt',first+second)
        console.log(first,'\n',second);
    }
    catch(error){
        
        console.log(error);
    }
}

let getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

start()