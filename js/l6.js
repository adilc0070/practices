let array1=[14,5,6,3,2,5,8,7]
let array2=[6,9,1,1,2,2,5,3,5,6]
let commn=[]

// function findcomn(a1,a2) {
//     k=0
//     for(i=0;i<a1.length;i++)
//     {   
//         count=0
//         for(j=0;j<a2.length;j++)
//         {
//             if(a1[i]==a2[j]){
//                 count++
//             }
            
//         }
//         if(count!=0){
//             commn[k]=a1[i]
//             k++
//         }
//     }
// }
// findcomn(array1,array2)
// console.log(commn);

function kmn(a1,a2){
    let commn=[]
    for(const x of a1){
        if(a2.includes(x)){
            commn.push(x)
        }
       
    } return commn
}
let kmnn=kmn(array1,array2)
console.log(kmnn);