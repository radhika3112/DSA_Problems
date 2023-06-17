// Ques:- You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

 

// Soln:-


let s = "book";
function halvesAreAlike(s) {
    let right_str="";
    let left_str="";
    let vowels="aeiouAEIOU"
    for(let i=0;i<s.length;i++){
        if(i<s.length/2){
            left_str+=s[i];
        }
        else{
            right_str+=s[i];
        }
    }
    let count1=0;
    let count2=0;
for(let i=0;i<left_str.length;i++){
    for(let j=0;j<vowels.length;j++){
if(left_str[i]===vowels[j]){
    count1+=1;
}
if(right_str[i]===vowels[j]){
    count2+=1;
}
    }
}
    if(count1===count2){
        return true;
    }
    else{
        return false;
    }
};
console.log(halvesAreAlike(s))