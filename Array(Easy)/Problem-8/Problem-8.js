// Ques:-Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Soln:-


let nums = [10,4,8,3];

function leftRightDifference(nums) {
    let leftArr=[];
    let rightArr=[];
    let output=[];
    for(let i=0;i<nums.length;i++){
        let rightSum=0;
        let leftSum=0
        for(let j=i+1;j<nums.length;j++){
rightSum+=nums[j];
            
        }
        for(let j=i-1;j>=0;j--){
            leftSum+=nums[j];
        }
        leftArr.push(leftSum)
        rightArr.push(rightSum)
    }
    for(let i=0;i<nums.length;i++){
        let diff=leftArr[i]-rightArr[i];
        if(diff >= 0){
            output.push(diff)
        }
        else{
            output.push((diff*(-1)))
        }
    }
    return output
};

console.log(leftRightDifference(nums));