// Ques:-Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.


// Soln:-

let nums = [1,2,2,1];
let k = 1;

function countKDifference(nums, k) {
    let output=0;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i;j<nums.length;j++){
            if((nums[i]-nums[j]===k) || (nums[i]-nums[j]===(-k))){
                output++;
            }
        }
    }
    return output;
};

console.log(countKDifference(nums, k));