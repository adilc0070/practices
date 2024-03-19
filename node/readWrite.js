const fs = require('fs');

fs.writeFile('node/test.txt', 'writed file', 'utf-8', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data has been written to the file successfully.');
    }
});


fs.readFile('node/test.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
    }else console.log('data from file: ',res);
})


fs.readFileSync('node/test.txt','utf-8',)