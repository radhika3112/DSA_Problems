// Ques:- You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.;

// Soln:-

let  paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]];
function destCity(paths) {
    let destination_city=paths[0][1];
     for(let i=1;i<paths.length;i++){
         for(let j=1;j<paths.length;j++){
             if(destination_city==paths[j][0]){
                 destination_city=paths[j][1];
             }
         }
     }
     return destination_city
 };
 console.log(destCity(paths))