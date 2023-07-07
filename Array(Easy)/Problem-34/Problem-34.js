// Ques:- You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

// Soln:-

let words = ["pay","attention","practice","attend"];
let pref = "at";

function prefixCount(words, pref) {
     let count=0;
    for(let i=0;i<words.length;i++){
        let str="";
       
        for(let j=0;j<pref.length;j++){
            str+=words[i][j]
        }
        if(str===pref){
            count+=1;
        }
        
    }
    return count;
};


console.log(prefixCount(words, pref))