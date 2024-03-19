const arr=[1,2,3,4,5]
function sum(...arr){
    let total=0
    for(const x of arr){
        total=total+x
    }
    return total
}
const result=sum(...arr)
console.log(result);