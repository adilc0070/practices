//genarator function
function* gen(){
    yield 1
    yield 2
    yield 3
}
let g=gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())