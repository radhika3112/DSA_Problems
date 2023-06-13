// Ques:- You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Soln:-


let word1 = "abc";
let word2 = "pqr";
function mergeAlternately(word1, word2) {
    let arr=[];
    for(let i=0,j=0;i<word1.length;i++){
        arr[j]=word1[i];
        j=j+2;
        }
        for(let k=0,l=1;k<word2.length;k++){
            arr[l]=word2[k];
            l=l+2;
        }
        return arr.join("")
    }
    console.log(mergeAlternately(word1, word2))