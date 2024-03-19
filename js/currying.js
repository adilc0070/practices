function addTwoNumAndMultiplWith2(a){
    return function(b){
        return (a+b)*2
    }
}

let result=addTwoNumAndMultiplWith2(15)(5)
console.log(result);

