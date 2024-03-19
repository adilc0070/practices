
const a=[3,4,2,1,3,45]
let large=a[0]
let small=a[0]

function max(){
    for(let i=1;i<a.length;i++){
        if(a[i]>large)
          large=a[i]
    }return large
}
console.log(max())
function min(){
    for(let i=1;i<a.length;i++){
        if(small>a[i])
        small=a[i]
    }return small
}
console.log(min())

