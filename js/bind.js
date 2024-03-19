const ob={
    name:"adil",
    age:20,
    place:"malappuram"

}

function id(s_no){
    return `sl no: ${s_no} \n${this.name} \nfrom: ${this.place} \nhis age: ${this.age}`
}

const adi=id.bind(ob)

console.log(adi(1));


// function sayHello() {
//     console.log(`Hello, ${this}`);
// }
// var a="nishad"
// const c=sayHello.call(a)