// Ques:- You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

// Soln:-


let names = ["Mary","John","Emma"];
let heights = [180,165,170];
function sortPeople(names, heights) {
    let obj={};
    let output=[];
    for(let i=0;i<heights.length;i++){
        if(!obj[heights[i]]){
            obj[heights[i]]=names[i]
        }
    }
 for(let i=0;i<heights.length;i++){
   for(let j=0;j<heights.length-i-1;j++){
        if(heights[j]<heights[j+1]){
          let fix=heights[j]
        heights[j]=heights[j+1];
          heights[j+1]=fix;
        }
    }
 }
 for(let i=0;i<heights.length;i++){
     output.push(obj[heights[i]]);
 }
 return output;
};
console.log(sortPeople(names, heights));