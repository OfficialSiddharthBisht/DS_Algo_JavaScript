/*Two Sorted Arrays Ended
Description

You are given two arraysAandB, each of size N.
The first array A, is sorted in ascending order, while the second array is sorted in descending order.
You have to find the number of elements common in both the arrays.
Try to solve this without using any extra space.

Input
The first line of the input containsT, the number of test cases.

The first line of each test case, contains N, the number of elements in the arrayAandB

The next line of the test case, containsNspace separated integers, denoting the number of elements of the arrayA

The next line containsNspace separated integers, denoting elements of the arrayB.

Constraints

1 <=T<= 10

1 <=N<= 1000000

1 <=A[i]<= 1000

Output
For each test case, print the number of elements common in both the arrays, on a new line.


Sample Input 1 

1
6
1 2 2 3 4 5
4 4 3 2 1 1
Sample Output 1

4
Hint

In the sample test case, the number of elements common in both the arrays are {1,2,3,4}. Therefore, the required output is 4.
*/

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let testCases=+input[0];
    let line=1;
    for(let i=0;i<testCases;i++){
        let N=+input[line++];
        let A=input[line++].trim().split(" ").map(Number);
        let B=input[line++].trim().split(" ").map(Number);
        twoSortedArr(N,A,B);
        // console.log(N,A,B);
    }
  }
  function twoSortedArr (N,A,B) {
      let i=0;
      let j=N-1;
      let count=0;
      while(i<N&&j>=0){
        if(A[i]===B[j]){
            count++;
            i++;
            j--;
        }
        else if(A[i]>B[j]){
            j--;
        }
        else if(A[i]<B[j]){
            i++;
        }
      }
      console.log(count);
  }
  if (process.env.USER === "siddharth") {
    runProgram(`5
    8
    1 2 3 5 8 8 9 9
    8 8 6 5 3 2 1 1
    9
    2 3 3 3 7 7 9 9 9
    9 9 9 8 6 5 4 3 1
    2
    4 7
    4 2
    3
    3 7 7
    8 5 1
    4
    2 7 7 8
    9 7 6 3`);
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