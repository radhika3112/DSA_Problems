// Ques:-You are given a 0-indexed array words consisting of distinct strings.

// The string words[i] can be paired with the string words[j] if:

// The string words[i] is equal to the reversed string of words[j].
// 0 <= i < j < words.length.
// Return the maximum number of pairs that can be formed from the array words.

// Note that each string can belong in at most one pair.

// Soln:-

let words = ["cd","ac","dc","ca","zz"];

function maximumNumberOfStringPairs(words) {
    let output=0;
    for(let i=0;i<words.length;i++){
        let word=words[i];
        let rev="";
        for(let j=word.length-1;j>=0;j--){
         rev+=word[j];
        }
        for(let k=i+1;k<words.length;k++){
            if(rev===words[k]){
                output++;
            }
    }
    }
    return output
};

console.log(maximumNumberOfStringPairs(words))