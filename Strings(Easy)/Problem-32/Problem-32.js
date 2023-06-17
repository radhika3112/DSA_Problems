// Ques:- Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

// Soln:-


let n = 4;

function generateTheString(n) {
    let str="";
    if(n%2==0){
        for(let i=0;i<n-1;i++){
            str+="p";
        }
        str+="z";
    }
    else{
        for(let i=0;i<n;i++){
            str+="p";
        }
    }
    return str
};
console.log(generateTheString(n))