// Ques:-Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

// Soln:-

let s = "foobar";
let letter = "o";

function percentageLetter(s, letter) {
    let total=s.length;
    let count=0;
    for(let i=0;i<total;i++){
if(s[i]===letter){
    count++;
}
    }
    let output=Math.floor((count/total)*100);
    return output;
};
console.log(percentageLetter(s, letter))