let obj={
    name:"jone",
    age:20,
    place:"kMaxLengt",
    number:343456789,
    quanity:7
}
let vow='AaEeIiOoUu'

for(let key in obj){
    
    if(vow.includes(key[0])) {
        delete obj[key]
    }

}
console.log(obj);