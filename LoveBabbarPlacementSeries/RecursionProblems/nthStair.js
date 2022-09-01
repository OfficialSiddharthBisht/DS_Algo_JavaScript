/*
? Count Number Of Ways To Reach The Nth Stair
You are given a number of staris. Initially , you are at the 0th stair & you need to reach tthe Nth stair. Each time you can either climb one steps or two steps. You are supposed tto retturn the number of distinct ways in which you can climb from 0th step to Nth step.
*/

function countNumberOfWays (N) {
    // body
    if(N < 0){
        return 0;
    }
    if(N === 0){
        return 1;
    }
    return countNumberOfWays(N - 1) + countNumberOfWays(N - 2);
}

console.log(countNumberOfWays(4));