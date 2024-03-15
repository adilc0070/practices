function checkElemnts(arr) {
    let uniq = []
    let duplicated = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
            uniq.push(arr[i])
        } else duplicated.add(arr[i])
    }
    return `these are the uniqe elements ${uniq}\nthese are the duplicate elements ${[...duplicated]}`
}


console.log(checkElemnts([2, 4, 6, 8, 10, 6, 12, 14, 16, 2, 18, 20]));