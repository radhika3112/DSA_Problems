// Ques:- Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Soln:-

let nums = [2,5,1,3,4,7];
let n = 3;

function shuffle(nums, n) {
    let output=[];
    for(let i=0,j=n;i<n,j<nums.length;i++){
       output.push(nums[i])
       output.push(nums[j]);
       j++
    }
    return output
};

console.log(shuffle(nums, n))