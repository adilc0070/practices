function IsPalidrome(str){
    return str===str.split('').reverse().join('')
}


console.log(IsPalidrome('malayalam'));



function isPaliRecur(str){
    if(str.length<=1) return true
    if(str[0]===str[str.length-1]) return isPaliRecur(str.slice(1,-1))
    return false

}