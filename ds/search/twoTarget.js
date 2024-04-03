let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
function search(arr,target1,target2){
    console.log(linearSearch(arr,target1)==linearSearch(arr,target2));
    return linearSearch(arr,target1)===linearSearch(arr,target2)
}

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true
        }
    }
}
console.log(search(array,3,13))