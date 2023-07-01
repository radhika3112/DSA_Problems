// Ques:- Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Soln:-

let nums = [8,1,2,2,3];

function smallerNumbersThanCurrent(nums) {
    let output=[];
    for(let i=0;i<nums.length;i++){
        let count=0;
        for(let j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count++;
            }
        }
        output.push(count)
    }
    return output;
};

console.log(smallerNumbersThanCurrent(nums))