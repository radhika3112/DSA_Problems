// Ques:- You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

// Return the number of '*' in s, excluding the '*' between each pair of '|'.

// Note that each '|' will belong to exactly one pair.

// Soln:-

let s = "l|*e*et|c**o|*de|";
function countAsterisks(s) {

    let arr=s.split("|");
    let count=0;
    for(let i=0;i<arr.length;i=i+2){
        for(let j=0;j<arr[i].length;j++){
      if(arr[i][j]==="*"){
          count++;
        }
    }
    }
    return count
};
console.log(countAsterisks(s))