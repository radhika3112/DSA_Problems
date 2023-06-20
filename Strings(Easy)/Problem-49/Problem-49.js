// Ques:-You are given a 0-indexed string num of length n consisting of digits.

// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.


// Soln:-


let num = "1210";
function digitCount(num) {
    let obj={
      "0":0,
      "1":0,
      "2":0,
      "3":0,
      "4":0,
      "5":0,
      "6":0,
      "7":0,
      "8":0,
      "9":0
    };

    for(let i=0;i<num.length;i++){
    if(obj[num[i]]===0){
      obj[num[i]]=1;
    }
      else{
        obj[num[i]]+=1
      }
    }
    let count=0;
    for(let i=0;i<num.length;i++){
        if(obj[i]=== +num[i]){
            count++;
        }
    }
    if(count===num.length){
        return true;
    }
    return false;
};

console.log(digitCount(num))