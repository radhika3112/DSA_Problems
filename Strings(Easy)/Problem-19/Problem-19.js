// Ques:- You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it. In one operation, you can replace a character in s with another lowercase English letter.

// Your task is to make s a palindrome with the minimum number of operations possible. If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.

// A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.

// Return the resulting palindrome string.

// Soln:-

let s = "egcfe";
function makeSmallestPalindrome(s) {
     let n = s.length;
  let arr = s.split('');

  let i = 0;
  let j = n - 1;

  while (i <= j) {
    if (arr[i] !== arr[j]) {
      let char1 = arr[i];
      let char2 = arr[j];

      if (char1 > char2) {
        arr[i] = char2;
      } else {
        arr[j] = char1;
      }
    }

    i++;
    j--;
  }

  return arr.join('');
};
console.log(makeSmallestPalindrome(s))