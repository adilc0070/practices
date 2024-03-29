function merge(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return  sort(merge(left), merge(right))
}
function sort(left, right) {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
}

console.log(merge([1, 52, 9, 5, 8, 3, 2, 1, 4, 8, 56, 2, 348, 95, 2]));