/*
Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.

input Format

Input contains integer N that is number of steps

Constraints

N <= 30

Output Format

Output for each integer N the no of possible ways w.

Sample Input 1 
4

Sample Output 1
7

Hint : -
No of the ways for n=4 are:-

1 1 1 1

1 1 2

2 1 1

1 2 1

1 3

3 1

2 2
*/

function numOfWays(N ,curr){
     //base cases
     if(curr === N){
         return 1;
     }
     if(curr > N){
         return 0;
     }
     return numOfWays(N ,curr + 1) + numOfWays(N ,curr + 2) + numOfWays(N ,curr + 3);
}

function runProgram(input){
    N = parseInt(input);
   console.log(numOfWays(N ,0));
}
runProgram(`4`);


// alternate way
function numberOfSteps(num) {
    // base cases
    // since we cant have -ve stairs
    if (num < 0) {
        return 0;
    }
    //if n===0 then we have successfully reached all of the stairs
    if (num === 0) {
        return 1;
    }
    //* recursion
    return (
        numberOfSteps(num - 1) + numberOfSteps(num - 2) + numberOfSteps(num - 3)
    );
    // because we can only move either 1 steps or 2 steps or 3 steps only
}