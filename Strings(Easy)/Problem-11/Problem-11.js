// Ques:- A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.


// Soln:-

let s = "is2 sentence4 This1 a3";
function sortSentence(s) {
   let arr=s.split(" ");
  let new_arr=[];
  let str="";
    for(let i=0;i<arr.length;i++){
        new_arr[arr[i][arr[i].length-1]-1]=arr[i];
            }
    for(let i=0;i<new_arr.length;i++){
    for(let j=0;j<new_arr[i].length-1;j++){
  str+=new_arr[i][j]
}
if(i<new_arr.length-1){
      str+=" ";
    }
    }
  return str;
};
console.log(sortSentence(s));