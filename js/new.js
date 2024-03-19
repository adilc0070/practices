let obj={
    a:10,
    b:{
        c:10,
    }
}
console.log(obj);
let copy = Object.assign({},obj);
copy.a=11;

console.log(copy);
console.log(obj);

copy.b.c=15;

console.log(copy);
console.log(obj);