// Ques:-Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

// Soln:-

let image = [[1,1,0],[1,0,1],[0,0,0]];

function flipAndInvertImage(image) {
         let arr=[];

         for(let i=0;i<image.length;i++){
             let new_arr =[];
             for(let j=0;j<image.length;j++){
                 if(image[i][j]===1){
                     new_arr[j]=0;
                 }
                 else{
                     new_arr[j]=1;
                 }
             }
             let new_arr2=[];
             for(let k=new_arr.length-1;k>=0;k--){
                 new_arr2.push(new_arr[k])
             }
            arr.push(new_arr2)
         }
         return arr

};

console.log(flipAndInvertImage(image))