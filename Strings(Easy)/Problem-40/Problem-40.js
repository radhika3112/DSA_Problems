// Ques:- Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Soln:-

let s = "abacbc";

function areOccurrencesEqual(s) {
    let obj={};
    for(let i=0;i<s.length;i++){
        if(!obj[s[i]]){
             obj[s[i]]=1;
        }
        else{
            obj[s[i]]+=1;
        }
    }
    for(let i=0;i<s.length;i++){
 let count= obj[s[i]]
    for(let key in obj){
      if(count!==obj[key]){
        return false;
      }
    }
  }
  return true;
};
console.log(areOccurrencesEqual(s));