// Ques:- Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 
// Soln:-


let s = ["h","e","l","l","o"];

function reverseString(s) {
    let arr=[];
    let index=0;
    for(let i=0;i<s.length;i++){
        arr.push(s[i]);
    }
    for(let i=arr.length-1;i>=0;i--){
        s[index]=arr[i];
        index++;
    }
    return
};
console.log(reverseString(s))