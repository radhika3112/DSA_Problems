// Ques:- Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.

// Soln:-

let patterns = ["a","abc","bc","d"];
let word = "abc";
function numOfStrings(patterns, word) {
    let arr=[];
    for(let i=0;i<word.length;i++){
        let bag="";
        for(let j=i;j<word.length;j++){
            bag+=word[j];
            arr.push(bag)
        }
    }
    let count=0;
    for(let i=0;i<patterns.length;i++){
       for(let j=0;j<arr.length;j++){
           if(patterns[i]===arr[j]){
               count++;
               break;
           }
       }
    }
    return count;
};

console.log(numOfStrings(patterns, word));