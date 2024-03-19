function same(arr1,arr2){
    let common=[]
    for(const x of arr1){
        if(arr2.includes(x)){
              common.push(x)
        }
    } return common
}
const a1=[1,2,3,4,5,6,7]
const a2=[3,4,5,6,677,8,9]
const newarr=same(a1,a2)
console.log(newarr);