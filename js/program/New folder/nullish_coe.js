const defaultValue = 0;
const value1 = null;
let value2 

console.log(value1 || defaultValue);
console.log(value1 ?? value2); 

console.log(value2 || defaultValue); f
console.log(value2 ?? value1); 