let arr = [[1, 2, [3, 4]], [5, [6, 7, 8], 9], [[10, 11], 12, 13]];
function flat(nest,res){
    for(let x of nest){
        if(Array.isArray(x)) flat(x,res)
        else res.push(x)
    }
    return res
}
console.log(flat(arr,[]));