// Ques:-You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

// Soln:-

let s = "a1c1e1";
function replaceDigits(s) {
let lowercase="abcdefghijklmnopqrstuvwxyz";
let str="";
for(let j=0;j<s.length;j++){
    let c1=0;
let c2=0;
for(let i=0;i<26;i++){
    if(s[j]===lowercase[i]){
      if(!s[j+1]){
        str+=s[j]
      }
      else{
        c1=i;
        c2=c1+(+s[j+1]);
        str+=s[j]+lowercase[c2];
    }
}
}
}
return str
};
console.log(replaceDigits(s))