function numOfWays(N , curr = 0){
    if(curr === N){
        return 1;
    }
    if(curr > N){
        return 0;
    }
    
    return numOfWays(N ,curr + 1) + numOfWays(N ,curr + 2) + numOfWays(N ,curr + 5); 
}

console.log(numOfWays(7 , 0));

// function numOfWays(N){
//     if(N === 0){
//         return 1;
//     }
//     if(N < 0){
//         return 0;
//     }
//     return numOfWays(N - 1) + numOfWays(N - 2) + numOfWays(N - 5);
// }
