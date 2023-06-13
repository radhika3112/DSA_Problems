// Ques:- A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

// Soln:-


let s = "Hello how are you Contestant";
let k = 4;

function truncateSentence(s, k) {
    let str="";
    let arr= s.split(" ");
    for(let i=0;i<k;i++){
        if(i<k-1){
        str+=arr[i]+" ";
    }
    else{
        str+=arr[i];
    }
    }
    return str;
};
console.log(truncateSentence(s, k));