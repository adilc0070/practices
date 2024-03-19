setTimeout(function(){
    console.log("timout")
},5000)
function x(y){
    console.log("this is x");
    y()
}


x(function y(){console.log("this is y");})
