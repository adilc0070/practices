import { log } from "console"

function QuickSort(arr){
    if(arr.length<=1)return arr
    let piviot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<piviot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...QuickSort(left),piviot,...QuickSort(right)]
}


log(QuickSort([91,2,5,8,6,4,1,2,8,3,5,4]))