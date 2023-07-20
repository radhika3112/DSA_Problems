// Ques:-Given a 0-indexed string s, repeatedly perform the following operation any number of times:

// Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the left of i (if any) and the closest occurrence of c to the right of i (if any).
// Your task is to minimize the length of s by performing the above operation any number of times.

// Return an integer denoting the length of the minimized string.

// Soln:-

let s = "aaabc";

function minimizedStringLength(s) {
    let obj={};
    for(let i=0;i<s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]]=1;
        }
        else{
            obj[s[i]]+=1;
        }
    }
    let str="";
    for(let key in obj){
        str+=key;
    }
    return str.length;
};


console.log(minimizedStringLength(s))