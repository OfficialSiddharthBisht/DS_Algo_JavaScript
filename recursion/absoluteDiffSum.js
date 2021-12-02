/* 
* Absolute difference sum using recursion
You are given an array and you have to find the sum of the absolute difference between consecutive elements of the array.

For instance, if the array is 3,5,6,1,8

Absolute of (3-5) = 2

Absolute of (5-6) = 1

Absolute of (6-1) = 5

Absolute of (1-8) = 7

------------------------

Sum of all absolute = 15

------------------------

**The only constraint is that you cannot write an iterative code. You have to write a recursive code only

Input Format :- 

There are several test cases. Each test case starts with **t** which is the total number of test cases present

Each test case has 2 lines:

Line 1 : Number of integers present in the array

Line 2 : The integers present in the array

Constraints

n <= 10000

arr[i] <= 15


Output Format :- 
Output one number(the sum) per test case


Sample Input 1 
2
3
1 5 2
5
3 5 6 1 8

Sample Output 1
7
15
*/
function sumOfAbsoluteDiffInArr(N,arr,i){
    //base case
    if(i===N-1){
        return 0;
    }
    let sum=0;
    let absoluteDiff=Math.abs(arr[i]-arr[i+1]);
    //recursion
    sum+=absoluteDiff+sumOfAbsoluteDiffInArr(N,arr,i+1);
    return sum;
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let testCases=+input[0];
    let line=1;
    for(let i=0;i<testCases;i++){
        let N=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number);
       console.log(sumOfAbsoluteDiffInArr(N,arr,j=0));
    }
  }
  if (process.env.USER === "siddharth") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }