// Ques:-Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid

// Soln:-

let nums = [0,1,2,3,4];
let index = [0,1,2,2,1];

function createTargetArray(nums, index) {
    let target = [];
    
    for( let i = 0; i<nums.length; i++) {
        if(typeof target[index[i]] == 'undefined') {         
            target[index[i]] = nums[i];
            
        } else {
			for(let j = target.length; j >= index[i]; j--) {
                target[j] = target[j-1];
                
               if( j == index[i] ) {
                  target[j] = nums[i];
               }                
            }
        }        
    }    
    return target;
};

console.log(createTargetArray(nums, index))