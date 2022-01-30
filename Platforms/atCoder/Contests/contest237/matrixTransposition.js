/*
Not Overflow AtCoder Beginner Contest 237 Ques A
Problem Link - https://atcoder.jp/contests/abc237/tasks/abc237_a
A - Not Overflow / 
Time Limit: 2 sec / Memory Limit: 1024 MB

Score : 100 points

Problem Statement
You are given an integer N. If N is between −2 ^ 31 and 2 ^ 31 −1 (inclusive), print Yes; otherwise, print No.

Constraints
−2 
63
 ≤N<2 
63
 
N is an integer.
Input
Input is given from Standard Input in the following format:

N
Output
If N is between −2 
31
  and 2 
31
 −1 (inclusive), print Yes; otherwise, print No.

Sample Input 1 

10
Sample Output 1 
Yes

10 is between −2 ^31  and 2 ^31
 −1, so Yes should be printed.

Sample Input 2 
-9876543210

Sample Output 2 
No

−9876543210 is less than −2 ^ 31 so No should be printed.

Sample Input 3 
483597848400000

Sample Output 3 
No

483597848400000 is greater than 2 ^ 31 −1, so No should be printed.
*/
function matrixTranspose(rows,col,matrix){
    let ans = [];
    for(let i = 0 ; i < col; i++){
        temp = [];
        for(let j = 0; j < rows; j++){
            temp.push(matrix[j][i]);
        }
        ans.push(temp);
    }
    for(let i = 0; i < col; i++){
        console.log(ans[i].join(" "));
    }
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [rows , columns] = input[0].trim().split(" ");
    let line = 1;
    let arr = [];
    for(let i = 0; i < rows; i++){
        arr.push(input[line++].trim().split(" ").map(Number));
    }
    matrixTranspose(rows,columns,arr);
  }
  if (process.env.USERNAME === "SiddharthBisht") {
    runProgram(`2 2
    1000000000 1000000000
    1000000000 1000000000
    `);
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
 