// Ques:- Ques:-A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

// Soln:-

let s = "xyzzaz";

function countGoodSubstrings(s) {
    let finalCount=0;
    for(let i=0;i<s.length-2;i++){
        let substr="";
        
        for(let j=i;j<i+3;j++){
          substr+=s[j]
        }
        let obj={};
        let count=0;
        for(let k=0;k<substr.length;k++){
        if(!obj[substr[k]]){
            obj[substr[k]]=1;
            count++;
        }
        else{
            obj[substr[k]]+=1;
        }
        }
        if(count===3){
            finalCount++;
        }
    }
    return finalCount;
};

console.log(countGoodSubstrings(s))