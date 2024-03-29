function bbbl(arr){
    let swap
    do {
        swap=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swap=true
            }
        }
    } while (swap);
    console.log(arr);
}

bbbl([14,895,6,23,4,512,8,7,65,2,4,8])