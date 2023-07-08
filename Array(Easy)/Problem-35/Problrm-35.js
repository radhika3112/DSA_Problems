// Ques:- You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

// Soln:-


let  words = ["are","amy","u"];
let left = 0;
let right = 2;
function vowelStrings(words, left, right) {
    let count=0;
    for(let i=left;i<=right;i++){
        if(words[i][0]==="a" || words[i][0]==="e" || words[i][0]==="i" || words[i][0]==="o" || words[i][0]==="u"){
            if(words[i][words[i].length-1]==="a"||words[i][words[i].length-1]==="e"||words[i][words[i].length-1]==="i"||words[i][words[i].length-1]==="o"||words[i][words[i].length-1]==="u"){
                count++;
            }
        }
    }
    return count;
};
console.log(vowelStrings(words, left, right))