// Ques:- Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Soln:-


let nums = [0,2,1,5,3,4];

function buildArray(nums) {
    let output=[];
    for(let i=0;i<nums.length;i++){
        output.push(nums[nums[i]])
    }
    return output
};

console.log(buildArray(nums))