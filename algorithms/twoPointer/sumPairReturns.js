/*Such Pair Returns-
Description

For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).

Input
10^6Input Format :

First line contains T, no of test cases.

First line of each test case contains 2 space separated integers: N & K

Second line of each test case contains **N** space separated integers

Constraints :

1 <= T <= 10

1 <= N <=1000000

1 <= abs(A[i]) <=10^6<= abs(K) <= 2*10^6

Output
Output 1/-1 depending on the condition for each test case on new line

Sample Input 1 
1
5 2
3 4 0 2 7

Sample Output 1
1
*/
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let testCases=+input[0];
    let line=1;
    for(let i=0;i<testCases;i++){
        let [N,K]=input[line++].trim().split(" ").map(Number);
        let arr=input[line++].trim().split(" ").map(Number);
        sumPair(N,K,arr);
    }
  }
  function sumPair (N,K,arr) {
      arr.sort(function(a,b) {return a-b})
      let i=0;
      let j=N-1;
      while(i<j){
          if(arr[i]+arr[j]===K){
              console.log("1");
              return;
          }
          else if(arr[i]+arr[j]>K){
              j--;
          }
          else if(arr[i]+arr[j]<K)
          {
              i++;
          }
      }
      console.log("-1");
  }
  function sumPairBruteForce (N,K,arr) {
      for(let i=0;i<N;i++)
      {
          for(let j=i+1;j<N;j++)
          {
              if(arr[i]+arr[j]===K){
                  console.log("1");
                  return;
              }
          }
      }
      console.log("-1");
  }
  if (process.env.USER === "siddharth") {
    runProgram(`1
    5 10
    3 4 0 2 7`);
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