// let nums=[2,5,4,8,9]

// function ck(target){
//     for(i=0;i<nums.length;i++){
//     for(j=0;j<nums.lenth;j++){
//         if(i!=j){
//         if(target==nums[i]+nums[j]){
//             console.log(`[${i},${j}]`)
//             break;
//         }
//         }
//     }
//     }
// }
// ck(9)
// let nums=[2,5,4,8,9]
// const target=9
// let len=nums.length
// let twoSum=function(nums,target){
//     for(i=0;i<len;i++)
//     {
//         for(j=i+1;j<len;j++){
      
//             if(target==nums[i]+nums[j]){
//             return `[${i},${j}]`
//             }
      
//     }
//   }
// }
// console.log(twoSum(nums,target));


let twoSum=function(nums,target){
    let len=nums.length
    for(i=0;i<len;i++)
    {
      for(j=i+1;j<len;j++){
      if(target==nums[i]+nums[j]){
        return [i,j]
        }    
    }
  }
  return []
}
let nums=[4,3,1]
const target=8
console.log(twoSum(nums,target));




// let twoSum=function(nums,target){
//     let len=nums.length
//     for(const c of nums)
//     {
//       for(const d of nums){
//         if(c!=d)
//         {
//             if(target==c+d)
//             {
//                 return [c,d]
//             }    
//         }
//     }
//   }
//   return[]
  
// }
// let nums=[4,3,4]
// const target=8
// console.log(twoSum(nums,target));