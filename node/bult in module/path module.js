let pat=require('path')
console.log(pat.sep);

let filePath=pat.join('/bult_in_module','subforl',"tex.txt")
console.log(filePath);

let Last=pat.basename(filePath)
console.log(Last);

let absolute=pat.resolve(__dirname)
console.log(absolute);