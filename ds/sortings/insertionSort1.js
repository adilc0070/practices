function insertionSORT(arr) {
    for (let i = 1; i < arr.length; i++) {
        let inert = arr[i] 
        let j = i - 1
        while (j >= 0 && arr[j] > inert) {
            arr[j + 1] = arr[j]
            j -= 1
        }
        arr[j + 1] = inert
    }
    console.log(arr);
}

insertionSORT([21, 6, 59, 814, 8, 556, 23, 4])