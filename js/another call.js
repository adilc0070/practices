let adil={
    Name:"Adil",
    Age:20,    
}

function hello(){
    return `hi ${this.Name} your age is ${this.Age}`
}
console.log(hello.call(adil));