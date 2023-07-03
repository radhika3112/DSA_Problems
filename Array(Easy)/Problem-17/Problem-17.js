// Ques:- You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

// Soln:-

let  nums = [1,15,6,3];

function differenceOfSum(nums) {
    let elementSum=0;
    let digitSum=0;
    let output=0;
    for(let i=0;i<nums.length;i++){
       elementSum+=nums[i];
       if(nums[i]>=10){
           let str=`${nums[i]}`;
           for(let j=0;j<str.length;j++){
               digitSum+=(+str[j])
           }
       }
       else{
           digitSum+=nums[i];
       }
    
    }
    if(elementSum>=digitSum){
        output=elementSum-digitSum;
    }
    else{
        output=(elementSum-digitSum)*(-1)
    }
    return output
};

console.log(differenceOfSum(nums))