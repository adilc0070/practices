// prototype

// function a(){
//     this.name="nishad",
//     this.age="22"
// }
// a.prototype.place="vly"
// const b=new a()
// console.log(a.prototype)

// // shallow copy
// const k={
//     apple:2,
//     mango:4
// }
// const l=k;
// k.apple=3
// console.log(k)
// console.log(l)


// // deep copy
//  const e={
//     orange:1,
//    pineapple:3
//  }
//  const f={...e}
//  e.orange=3
//  console.log(e)
//  console.log(f)


// function a(){
//     this.name="nishad",
//    this.age=20
// }
// a.prototype.place="vly"

// a.city="mlm"
// var b=new a()
// console.log(b)


// rest

function   d(...arr){
    let sum=0
    for(const x of arr){
        sum+=x;
    }
    return sum;
}

const c=d(1,2,3,4,5,6,6,77,8,89,9,0,0,0,0,)
console.log(c);