function BIsearch(arr,target){
    let right=arr.length-1
    let left=0


    while(left<=right){
        let mid=Math.floor((right+left)/2)

        if(arr[mid]===target){
            return mid
        }else if(target<arr[mid]){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return -1
}

