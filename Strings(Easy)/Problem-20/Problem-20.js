// Ques:- Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Soln:-

let s = "Let's take LeetCode contest";
function reverseWords(s) {
    let arr=s.split(" ");
    let new_arr=[];
    for(let i=0;i<arr.length;i++){
        let str="";
        for(let j=arr[i].length-1;j>=0;j--){
str+=arr[i][j];
        }
        new_arr.push(str);
    }
    return new_arr.join(" ");
};
console.log(reverseWords(s))