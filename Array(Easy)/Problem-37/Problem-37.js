// Ques:-You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

// Return the number of strings in words that are a prefix of s.

// A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

 

// Soln:-


let words = ["a","b","c","ab","bc","abc";
let s = "abc";


function countPrefixes(words, s) {
    let arr=[];
    for(let i=0;i<s.length;i++){
        let substr="";
        for(let j=0;j<=i;j++){
    substr+=s[j];
        }
        arr.push(substr)
    }
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<words.length;j++){
            if(arr[i]===words[j]){
                count++;
            }
        }
    }
    return count
};


console.log(countPrefixes(words, s))