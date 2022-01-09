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

/*
The task is to find the number of ways to climb the staircase of height (N) where a person is allowed 1 step, 2 steps or 3 steps at a time.

Hint:
Think about solving for smaller height and using recursion

Short Explaination
We are given a staircase of height N and we need to find the total number of ways to reach the staircase of height N by taking 1,2 or 3 steps.We can think of solving the problem for smaller height and then solving it for larger height by taking all the possible steps allowed.

Detailed Explanation:
As we need to reach the stair case of height N by taking 1,2 or 3 steps. First thing we need to think is that to reach the stair case of height N, we need to reach upto the stair-case N-1, N-2 or N-3, i.e. we need to solve the problem for smaller cases (sub-problem), also from any stair position we have 3 options i.e. to take 1 ,2 or 3 steps.

N = 4
1 1 1 1
1 1 2
2 1 1
1 2 1
2 2
1 3
3 1

Output = 7

Suppose when N = 3
1 1 1
1 2
2 1
3

Suppose when N = 2
1 1
2

Suppose when N = 1
1 

These all smaller sub-problems contribute to the final problem N = 4, as from all these stair-case we can take those allowed steps and this will contribute to the final answer

Pseudo Code
Recursive Solution
numOfWays(N):
    * if N<0: // Removing the case which are not possible
        * return 0
    * if N = 0: // Counting each way by adding it
        * return 1
    * return numOfWays(N-1) + numOfWays(N-2) + numOfWays(N-3)  // Taking each  possible step at every N, i.e. sub-problems
Time Complexity:
O(3^N), exponentinal complexity 3 possible sub-problem in recusrion

Space Complexity:
No extra space is required, hence the space complexity will be O(1).

Alternate Solution:
A DP solution can build the solution by saving the states which will reduce the time complexity to O(N), but space complexity will be O(N)
*/