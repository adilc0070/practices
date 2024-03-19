let {readFileSync,writeFileSync}=require('fs')

let file='bult in module/flle/first.txt'
let first=readFileSync(file,'utf8')
let two=readFileSync('bult in module/flle/second.txt','utf8')
console.log(first,two);


writeFileSync(
    'bult in module/sync/flle/infile/text.txt',
    `here is the result : ${first}, ${two}`,
    {flag:'a'}
)