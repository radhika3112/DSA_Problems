// Ques:- You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

// Soln:-

let key = "the quick brown fox jumps over the lazy dog";
let message = "vkbs bs t suepuv";

function decodeMessage(key, message) {
let key1= key.split(" ").join("");
let alphabets = "abcdefghijklmnopqrstuvwxyz";
let str="";
    let obj={};
    for(let i=0,j=0;i<key1.length;i++){
        if(!obj[key1[i]]){
        obj[key1[i]]=alphabets[j];
        j++;
        }
    }
    for(let i=0;i<message.length;i++){
if(message[i]==" "){
    str+=" ";
}
else{
    str+=obj[message[i]];
}
    }
    return str;
};
decodeMessage(key, message);