// Ques:-Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

 

// soln:-

let num = "51230100";

function removeTrailingZeros(num) {
    let arr=num.split("");
    for(let i=num.length-1;i>=0;i--){
       if(arr[i]==="0"){
        arr[i]="";
       }
       else{
           return arr.join("");
       }
    }
};
console.log(removeTrailingZeros(num))