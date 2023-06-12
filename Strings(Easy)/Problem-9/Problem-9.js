// Ques:-A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:

// <col> denotes the column number c of the cell. It is represented by alphabetical letters.
// For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
// <row> is the row number r of the cell. The rth row is represented by the integer r.
// You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.

// Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.

// Soln:-

let s = "K1:L2";
function cellsInRange(s) {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arr = []

    let r1 = s[1];
    let r2=s[4];
    let c1=0;
    let c2 = 0;
    for(let i=0; i<alphabets.length; i++){
        if(s[0]===alphabets[i]) {
            c1 = i;
        }

        if(s[3]===alphabets[i]) {
            c2 = i;
        }
    }

    for(let i=c1; i<=c2; i++){
        for(let j=r1; j<=r2; j++){
            arr.push(alphabets[i]+j)
        }
    }

    return arr
};

cellsInRange(s);