const persons=require('./names')
const uti=require('./utils')
uti(persons.name1)
uti(persons.name2)
uti(persons.name3)
uti(persons.name4)


persons.name5()

console.log(persons);


let {readFileSync}=require('fs')


console.log(readFileSync("first/local module/defnition.txt",'utf-8')
)