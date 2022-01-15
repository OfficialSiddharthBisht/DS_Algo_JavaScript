/*
Given an array of length N and an integer X, the task is to find the number of subsets with a sum equal to X.

Input Format

First line consists of N and X separated by space.

Second line consists of N integers separated by spaces.

Constraints

1 <= N <= 20

1 <= X <= 100

Output Format :- 
Print the count in a single line.

Sample Input 1 
4 10
1 2 3 4

Sample Output 1
1

Hint
Sample 1 Explanation

The possible subsets with sum 10 are : [1,2,3,4]
*/
function countWithCondition(N,X,arr,i=0,sum){
    if(sum === X){
      return 1;
    }
    if(i >=N){
      return 0;
    }
    return countWithCondition(N,X,arr,i+1,sum+arr[i]) + countWithCondition(N,X,arr,i+1,sum);
  }
  
  function runProgram(input){
    input = input.trim().split("\n");
    let [N,X] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(countWithCondition(N,X,arr,0,0));
  }
  
  runProgram(`4 10
  1 2 3 4`);