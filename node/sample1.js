var f=require("fs")

// f.readFile("./files/first.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data)
//     }
// })
f.writeFile("./files/new.txt",
"this is a new created ",
(err)=>{
    if(err){
    console.log(err);
    }
    console.log("file created at files folder");
}
)