function add(a,b) {
    return a+b    
}
function sub(c,d){
    return c-d
}
module.exports.add=add
module.exports.sub=sub


module.exports.div=function(a,b){
    return a/b
}
module.exports.mul=(a,b)=>{
    return a*b
}

exports.mod=(a,b)=>{
    return a%b
}