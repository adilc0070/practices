let {readFileSync,writeFileSync}=require('fs')

console.log("start");

let file='bult in module/sync/flle/first.txt'
let first=readFileSync(file,'utf8')
let two=readFileSync('bult in module/sync/flle/second.txt','utf8')
console.log(first,two);


writeFileSync(
    'bult in module/sync/flle/infile/text.txt',
    `here is the result : ${first}, ${two}`,
    {flag:'a'}
)

console.log("end");
console.log("starting the next ");