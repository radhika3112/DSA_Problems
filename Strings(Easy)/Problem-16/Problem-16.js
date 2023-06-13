// Ques:- Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Soln:-


let s = "Hello";
function toLowerCase(s) {
  let alphaObj = {
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z',
  };

  let str="";

  for (let char of s) {
    if (alphaObj[char]){
    str += alphaObj[char]
    }
    else {
        str += char
    }
  }

  return str;
};
console.log(toLowerCase(s))
