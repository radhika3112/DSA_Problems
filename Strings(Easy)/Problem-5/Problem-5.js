// Ques:- A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

// Soln:-

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

function MaximumWords(sentences) {
    let max=0;
    for(let i=0;i<sentences.length;i++){
    let count=1;
    for(let j=0;j<sentences[i].length;j++){
        if(sentences[i][j]==" "){
            count++;
        }
    }
    if(count>max){
        max=count;
    }
}
return max;
    }
    MaximumWords(sentences);