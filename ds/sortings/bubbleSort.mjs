function Bubble(arr){
    let swap
    do{
        swap=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swap=true
            }
        }
    }while(swap)
    console.log(arr);
}

Bubble([48,5,86,1,7,3,48,6,52,8,5])