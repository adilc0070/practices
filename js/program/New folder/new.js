let obj={
    a:10,
    b:{
        c:10,
    }
}
let copy = Object.assign({},obj);
copy.a=11;
copy.b.c=15;

console.log(copy);
console.log(obj);