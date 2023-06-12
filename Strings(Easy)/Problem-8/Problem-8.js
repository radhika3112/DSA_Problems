// Ques:- You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Soln:-

let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
let ruleKey = "color";
let ruleValue = "silver";

function countMatches (items, ruleKey, ruleValue) {
    let count=0;
    let obj={
         "type": 0,
    "color": 1,
    "name": 2
    };
    let index=obj[ruleKey]
    for(let i=0;i<items.length;i++){
            if(items[i][index]===ruleValue){
                count++;
            }
        }
    return count;
};
countMatches(items , ruleKey , ruleValue);