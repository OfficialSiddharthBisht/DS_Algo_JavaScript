/* 
AtCoder Beginner Contest 237 B Ques
Matrix Transposition 
Problem Link - https://atcoder.jp/contests/abc237/tasks/abc237_b

B - Matrix Transposition / 
Time Limit: 2 sec / Memory Limit: 1024 MB

Score : 200 points

Problem Statement
You are given an H-by-W matrix A.
The element at the i-th row from the top and j-th column from the left of A is A 
i,j
​
 .

Let B be a W-by-H matrix whose element at the i-th row from the top and j-th column from the left equals A 
j,i
​
 .
That is, B is the transpose of A.

Print B.

Constraints
1≤H,W≤10 
5
 
H×W≤10 
5
 
1≤A 
i,j
​
 ≤10 
9
 
All values in input are integers.
Input
Input is given from Standard Input in the following format:

H W
A 
1,1
​
  A 
1,2
​
  … A 
1,W
​
 
A 
2,1
​
  A 
2,2
​
  … A 
2,W
​
 
⋮
A 
H,1
​
  A 
H,2
​
  … A 
H,W

Print B in the following format:

B 
1,1
​
  B 
1,2
​
  … B 
1,H
​
 
B 
2,1
​
  B 
2,2
​
  … B 
2,H
​
 
⋮
B 
W,1
​
  B 
W,2
​
  … B 
W,H
​
Sample Input 1 
Copy
4 3
1 2 3
4 5 6
7 8 9
10 11 12
Sample Output 1 
1 4 7 10
2 5 8 11
3 6 9 12

For example, we have A 
2,1  =4, so the element at the 1-st row from the top and 2-nd column from the left of the transpose B is 4.

Sample Input 2 
2 2
1000000000 1000000000
1000000000 1000000000

Sample Output 2 
1000000000 1000000000
1000000000 1000000000
*/

function runProgram(input) {
    // Write code here
    input = parseInt(input);
    let low = -Math.pow(2,31);
    let high = Math.pow(2,31) - 1;
    if(input >= low && input <= high){
        console.log("Yes");
    }else{
        console.log("No");
    } 
  }
  if (process.env.USERNAME === "SiddharthBisht") {
    runProgram(`483597848400000
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
 