// // => Hello world!
// console.log('Hello world!');

// // => Hello QuickRef.ME
// console.warn('hello %s', 'QuickRef.ME');

// // Prints error message to stderr
// console.error(new Error('Oops!'));

// // Prints 3 thrice, not what we meant.
// for (var i = 0; i < 3; i++) {
//     setTimeout(_ => console.log(i), 10);
// }

// // Prints 0, 1 and 2, as expected.
// for (let j = 0; j < 3; j++) {
//     setTimeout(_ => console.log(j), 10);
//   }


let plusFive = (number) => {
    return number + 5;
};
// f is assigned the value of plusFive
let f = plusFive;

console.log(plusFive(3)); // 8
// Since f has a function value, it can be invoked. 
console.log(f(9));// 14
console.log(f(2));// 

