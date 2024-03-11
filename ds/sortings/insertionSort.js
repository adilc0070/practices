function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let nextInsertions=arr[i]
        j=i-1
       while(j>=0&&arr[j]>nextInsertions){
        arr[j+1]=arr[j]
        j=j-1
       } 
       arr[j+1]=nextInsertions
    }
    console.log(arr);
}

insertionSort([955,5,15,8,2,7,89,54,0])