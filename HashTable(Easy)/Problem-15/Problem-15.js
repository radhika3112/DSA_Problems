// Ques:-Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:

// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

// Soln:-


let s = "abccbaacz";

function repeatedCharacter(s) {
    let obj = { }
   for (let i = 0; i < s.length; i++) { 
       if (s[i] in obj){ 
           return s[i]
       }
       else{
       obj[s[i]] = 0;
   }
}
};

console.log(repeatedCharacter(s))