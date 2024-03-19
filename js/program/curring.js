function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}


const s=add(4)
const v=s(5)
const w=v(10)
console.log(w);
let sd=add(4)(5)(10)
console.log(sd);