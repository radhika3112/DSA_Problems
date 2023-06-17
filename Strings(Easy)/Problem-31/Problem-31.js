// Ques:-You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.



// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.


// Soln:-

let coordinates = "a1";

function squareIsWhite(coordinates) {
    let str="abcdefgh";
    let obj={};
    for(let i=0;i<str.length;i++){
        for(let j=1;j<=8;j++){
if(!obj[str[i]+j]){
    if(i%2==0){
         if(j%2==1){
    obj[str[i]+j]="black"
    }
    else{
        obj[str[i]+j]="white";
    }
    }
    else{
        if(j%2==0){
    obj[str[i]+j]="black"
    }
    else{
        obj[str[i]+j]="white";
    }
    }
   }
     }
    }
    if(obj[coordinates]==="white"){
        return true;
    }
    else{
        return false;
    }
};
console.log(squareIsWhite(coordinates))