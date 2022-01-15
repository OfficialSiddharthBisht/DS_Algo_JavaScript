/* Given a number N representing the number of stairs in a staircase
You are on the 0th step and are required to climb the top.
In one move , you are allowed to climb 1 2 or 3 stairs.
You are required to print the number of different paths via which you can climb to the top.

* Input Format : -
A number N

* Output Format : -
A number representing the number of ways to climb the stairs from 0 to top.

Input
6

Output 
24
*/

function countPaths(N){
   let dp = new Array(N + 1); // dp is the array for tabulation
   dp[0] = 1; // if path reach to 0 then there is one way  
   for(let i = 1;i <= N ;i++){
       if(i === 1){
        dp[i] = dp[i - 1];
       }else if(i === 2){
        dp[i] = dp[i - 1] + dp[i - 2];
       }else{
       dp[i] = dp[i -1] + dp[i -2] + dp[i -3];
       }   
    }
    // console.log(dp);
    return dp[N];
}

console.log(countPaths(6));
console.log(countPaths(2));
console.log(countPaths(1));
console.log(countPaths(3));