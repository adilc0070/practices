let {writeFileSync}=require('fs')

for(i=0;i<10000;i++){
    writeFileSync('first/stream/readfile/file/text.txt',`helo${i+1}\n`,{flag:'a'}
)}