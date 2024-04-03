function large(string){
    let arr = string.split(' ').map(val=>val.trim())
    return arr.reduce((curr,currlength)=>curr.length>currlength.length?curr:currlength,'')
}
console.log(

    large('adil is a good boy   and also he is a developer')
);