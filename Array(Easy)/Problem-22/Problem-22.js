// Ques:-Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

 

// Soln:-

let arr = [1,4,2,5,3];

function sumOddLengthSubarrays(arr) {
    let sum=0; 
    for(let i=0;i<arr.length;i++){
        let bag=[];
        for(let j=i;j<arr.length;j++){
         bag.push(arr[j]);
         if(bag.length%2===1){
          for(let k=0;k<bag.length;k++){
sum+=bag[k];
          }
         }
        }
    }
    return sum;
};

console.log(sumOddLengthSubarrays(arr))