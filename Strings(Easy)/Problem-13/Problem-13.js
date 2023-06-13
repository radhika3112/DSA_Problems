// Ques:- A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.


// Soln:-


let sentence = "thequickbrownfoxjumpsoverthelazydog";

function checkIfPangram(sentence) {
    let obj={};
    let count=0;
    for(let i=0;i<sentence.length;i++){
        if(!obj[sentence[i]]){
            obj[sentence[i]]=1;
            count++;
        }
        else{
            obj[sentence[i]]+=1
        }
    }
    if(count==26){
        return true;
    }
    return false;
};

console.log(checkIfPangram(sentence))