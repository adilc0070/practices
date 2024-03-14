let obj={
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4",
}


let a=[..Object.entries(obj)]
console.log(a);
for(let [key,value] of Object.entries(obj)){
    a.push(key,value)
    // console.log(key,value);
}

// console.log(a);