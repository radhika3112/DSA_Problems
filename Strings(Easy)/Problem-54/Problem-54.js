// Ques:- Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

// Soln:-

let  s = "aaabbb";

function checkString(s) {
let indexOfB=0;
let flag=true;
for(let i=0;i<s.length;i++){
    if(s[i]==="b"){
     indexOfB=i+1;
      break;
    }
}
if( indexOfB!=0 && s[indexOfB]!=undefined){
for(let j=indexOfB;j<s.length;j++){
  if(s[j]==="a"){
  
  flag=false;
  break;
  }
  else{
    flag=true;
  }
}
}
else if(indexOfB===0){
  return true;
}
return flag;
};

console.log( checkString(s))