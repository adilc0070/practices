function add(a){
    return function(b){
        return function(c){
            return c+a+b
        }
    }
}

var aa=add(5) //element for add function's a's parramiter
var bb=aa(20) //element for add's return function b's parramiter
var cc=bb(20) //element for return function's b's returned function c's parramiter
// console.log(cc); // invoking the all included function  


let n=add(10)(5)(5)
console.log(n);