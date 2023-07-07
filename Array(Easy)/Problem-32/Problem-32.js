// Ques:- A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

// Soln:-

let s = "IDID";

function diStringMatch(s) {
    let I=0;
    let D=s.length;
    let arr=[];
    for(let i=0;i<=s.length;i++){
        if(s[i]==="I"){
       arr.push(I);
       I++;
        }
        else{
            arr.push(D);
            D--;
        }
    }
    return arr
};

console.log(diStringMatch(s))