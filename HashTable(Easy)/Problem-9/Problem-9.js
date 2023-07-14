// Ques:-You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Soln:-

let allowed = "ab";
let words = ["ad","bd","aaab","baa","badab"];

function countConsistentStrings(allowed, words) {
    let obj={};
    for(let i=0;i<allowed.length;i++){
        if(!obj[allowed[i]]){
            obj[allowed[i]]=1;
        }
    }
    let array=[];
    for(let i=0;i<words.length;i++){
        let str="";
        for(let j=0;j<words[i].length;j++){
            if(obj[words[i][j]]===undefined){
                str=""
                break;
            }
            else{
                str+=words[i][j];
            }
        }
        if(str!=""){
        array.push(str);
    }
    }
    return array.length;
};

console.log(countConsistentStrings(allowed, words) )