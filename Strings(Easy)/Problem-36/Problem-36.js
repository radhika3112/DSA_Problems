// Ques:- Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Soln:-

let s = "abacbc";

function areOccurrencesEqual(s) {
    let count1=0;
    let count2=0;
    let obj={};
    for(let i=0;i<s.length;i++){
        if(!obj[s[i]]){
             obj[s[i]]=1;
            count1+=1;
        }
        else{
            count2+=1;
        }
    }
    if(count1===count2){
        return true;
    }
    else if(count1===1 && count2===s.length-1){
        return true;
    }
    else{
        return false;
    }
};
console.log(areOccurrencesEqual(s))