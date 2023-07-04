// Ques:-Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Soln:-

let mat = [[1,2,3],
              [4,5,6],
              [7,8,9]];

    function diagonalSum(mat) {
    let sum=0;
    let n=mat.length
for(let i=0;i<mat.length;i++){
    for(let j=0;j<mat.length;j++){
        if(i===j){
            sum+=mat[i][j];
        }
        if(i==(n-j-1) && i!==j){
            sum+=mat[i][j]
        }
    }
}
return sum
};

console.log(diagonalSum(mat))