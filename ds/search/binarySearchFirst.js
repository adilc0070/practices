function BinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
    let mid = Math.floor((left + right) / 2);
    let result = -1;
    if (left <= right) {
        if (arr[mid] === target) {
            result = mid;
            let found = search(arr, target, left, mid - 1);
            if (found !== -1) return found;
        } else if (target < arr[mid]) {
            return search(arr, target, left, mid - 1);
        } else {
            return search(arr, target, mid + 1, right);
        }
    }
    return result;
}

console.log(BinarySearch([1, 2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 6)); 



