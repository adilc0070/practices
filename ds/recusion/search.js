let arr = [1,2,3,4,4,4,4,4,4,5]

function binarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}


function search(arr,target,left,right){
    let mid=Math.floor((left+right)/2)
    let first
    let second
    if(arr[mid]===target){
        first=mid
        let findFirst= search(arr,target,left,mid-1)
        return findFirst
    }else if(target<arr[mid]){
        return search(arr,target,left,mid-1)
    }else{
        return search(arr,target,mid+1,right)
    }
}