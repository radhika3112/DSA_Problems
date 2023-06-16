// Ques:- Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string

// Soln:-

let word = "abcdefd";
let ch = "d";
function reversePrefix(word, ch) {
    let index=0;
    for(let i=0;i<word.length;i++){
if(word[i]===ch){
    index=i;
    break;
}
    }
    let str=""
    if(index!=0){
        for(let i=index;i>=0;i--){
            str+=word[i];
        }
        for(let j=index+1;j<word.length;j++){
            str+=word[j]
        }
        return str;
    }
    else{
        return word
    }
};
console.log( reversePrefix(word, ch))