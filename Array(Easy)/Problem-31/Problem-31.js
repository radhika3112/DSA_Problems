// Ques:-Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Soln:-


let words = ["abc","car","ada","racecar","cool"];


function firstPalindrome(words) {
    for(let i=0;i<words.length;i++){
        let str="";
        for(let j=words[i].length-1;j>=0;j--){
            str+=words[i][j];
        }
        if(str=== words[i]){
            return words[i]
        }
    }
    return ""
};

console.log(firstPalindrome(words))