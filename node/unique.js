
var removeDuplicates = function(nums) {
    size=nums.length
    for(i=0;i<size;i++){
        for(j=i+1;j<size;j++){
            if(nums[i]==nums[j]&&j<size){
                nums[j]=nums[j+1]
                size--
            }
        }
    }
    return nums
};

let a=[1,2,3,6,1,5,1]
let b=removeDuplicates(a)
console.log(b);