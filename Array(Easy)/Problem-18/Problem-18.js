// Ques:-Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Soln:-


let word1 = ["ab", "c"];
let word2 = ["a", "bc"];

function arrayStringsAreEqual(word1, word2) {
    let word1_new=word1.join("");
    let word2_new=word2.join("");
    if(word1_new==word2_new){
        return true;
    }
    return false;
};
console.log(arrayStringsAreEqual(word1, word2))