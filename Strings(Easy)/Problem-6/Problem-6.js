// Ques:- Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Soln:-

let s = "RLRRLLRLRL";

function balancedStringSplit(s) {
    let Rcount=0;
    let Lcount=0;
    let Count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=="R"){
            Rcount++;
        }
        else{
            Lcount++;
        }
        if(Lcount==Rcount){
            Count++;
            Rcount=0;
            Lcount=0;
        }
    }
    return Count;
};

balancedStringSplit(s);