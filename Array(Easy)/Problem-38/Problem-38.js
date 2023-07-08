// Ques:-A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

// Soln:-

let arr = ["d","b","c","b","c","a"];
let k = 2;


function kthDistinct(arr, k) {
    let obj={};
    let new_arr=[];
for(let i=0;i<arr.length;i++){
  if(!obj[arr[i]]){
    obj[arr[i]]=1;
  }
  else{
    obj[arr[i]]+=1;
  }
}
for(let key in obj){
  if(obj[key]===1){
    new_arr.push(key);
}
}
if(k<=new_arr.length){
return new_arr[k-1]
}
return ""
};

console.log(kthDistinct(arr, k))