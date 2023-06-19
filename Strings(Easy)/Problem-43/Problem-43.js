// Ques:- There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

 

// Soln:-


let moves = "UD";
function  judgeCircle(moves) {
    let count1=0;
    let count2=0;
    for(let i=0;i<moves.length;i++){
        if(moves[i]==="U"){
            count1++;
        }
        else if(moves[i]==="D"){
            count1--
        }
        else if(moves[i]==="L"){
            count2++;
        }
        else{
            count2--;
        }
    }
    if(count1===0 && count2===0){
        return true;
    }
    return false;
};
console.log(judgeCircle(moves))