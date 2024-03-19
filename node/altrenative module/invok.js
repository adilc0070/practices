const cal=require('./functions')
console.log(cal);
var a=cal.add(4,5)
console.log("altrenative syntax "+a);
let b=cal.sub(5,6)
console.log("altrenative syntax "+b);
const{add,sub}=cal

let c=add(8,6)
console.log("destructerd "+c);

let d=sub(8,6)
console.log("destructerd "+d);

let e=cal.mul(4,2)
console.log("altrenative syntax "+e);

let f=cal.div(4,2)
console.log("altrenative syntax "+f);

let g=cal.mod(5,2)
console.log(g);