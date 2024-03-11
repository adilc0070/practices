function BinarySearch(arr, target) {
    return Search(arr, target, 0, arr.length)
}

function Search(arr, target, left, right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
        return mid
    } else if (target < arr[mid]) return Search(arr, target, left, mid - 1)
    else return Search(arr, target, mid + 1, right)
}