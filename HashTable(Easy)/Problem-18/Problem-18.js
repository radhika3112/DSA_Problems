// Ques:- There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

//  Soln:-


let text = "hello world";
let brokenLetters = "ad";

function canBeTypedWords(text, brokenLetters) {
    let arr=text.split(" ")
    let count1=0;
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr[i].length;j++){
            for(let k=0;k<brokenLetters.length;k++){
                if(arr[i][j]===brokenLetters[k]){
                    count++;
                    break;
                }
            }
            if(count===1){
                count1++;
                break;
            }
        }
    }
    return (arr.length-count1);
};

console.log(canBeTypedWords(text, brokenLetters))