let a=10;
var b=2;

function c(){
    let a=1;
    this.q=a
    
     function d(){
        var b=4

        this.g=b
        // console.log(g);
    }
    d()
    console.log(g);
}
c()



// var a=10
// let b=9
// setInterval(()=>{console.log(a),console.log(b)
// b--
// if(b==0){
//     clearInterval(()=>{console.log("stop")},1000)    
// }
// },1000);