function applyOperation(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

const result1 = applyOperation(5, 3, add); // result1 will be 8
const result2 = applyOperation(10, 4, subtract); // result2 will be 6
console.log(result1);
console.log(result2);