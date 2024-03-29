function main(name,age){
    return {
        name:name,
        age:age,
        welcome:function(){
            console.log(`welcome to dashBoard ${name}`);
        }
    }
}
let functi=main('adil',20)
functi.welcome()