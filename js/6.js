const arr=[1,2,3,4,5,6]

for (const [x,num] of arr.entries()) {
    console.log(`Index ${x} ${num}`);
    
}
console.log("\n\n");
let num=0
for (const x of arr) {
    console.log(`Index ${num} ${x}`);
    num++
}