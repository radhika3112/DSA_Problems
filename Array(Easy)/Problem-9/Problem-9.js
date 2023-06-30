// Ques:-Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Soln:-


let nums = [1,2,3,4];

function runningSum(nums) {
    let output=[];
    for(let i=0;i<nums.length;i++){
        let sum =0;
        for(let j=0;j<=i;j++){
            sum+=nums[j]
        }
      output.push(sum);
    }
    return output;
};

console.log(runningSum(nums))