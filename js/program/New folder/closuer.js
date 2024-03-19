function outer(){
    var a=20;
    function inner(b){
        console.log(a,b);
    }
    inner(" hi ")
    return inner;
}
outer()("hello")

var m=outer()
m("ma")

function outest(){
    let c=70
    function outer(){
        var a=80;
        function inner(b){
            console.log(a,b,c);
        }
        inner(" as ")
        return inner;
    }
    return outer
}
outest()()
