// Ques:- You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

// Soln:-


let nums = [0,1,4,6,7,10];
let diff = 3;

function arithmeticTriplets(nums, diff) {
    let output=0;
    for(let i=0;i<nums.length;i++){
        let num=nums[i];
        let count=0;
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]-num===diff){
                count++;
                num=nums[j];
            }
            if(count===2){
                output++;
                break;
            }
        }
    }
    return output
};

console.log(arithmeticTriplets(nums, diff));