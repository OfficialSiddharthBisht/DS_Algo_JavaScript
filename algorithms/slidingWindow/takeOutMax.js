/*
Given an array of integers and a number k, find the maximum sum of a subarray of size k.

Input
Input Format

First line consists of two integers n and k separated by space

Second line consists of n integers separated by spaces.

Constraints

1 <= n <= 10^7

1 <= k <= 10^6

Output
Print the maximum sum of a subarray of size k.

Sample Input 1 

10 3
-1 -1 -2 1 -2 4 1 9 3 9

Sample Output 1

21
*/
function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let [n,k]=input[0].trim().split(" ").map(Number);
    let arr=input[1].trim().split(" ").map(Number);
    maxSumSubarrOfSizeK(n,k,arr);
  }
  function maxSumSubarrOfSizeK(n,k,arr){
      let sum=0;
      let ans=[];
      // length of the first window
      for(let i=0;i<k;i++){
          sum+=arr[i];
      }
      ans.push(sum);
      for(let i=k;i<n;i++){
            //to remove the prev element from the array
            sum-=arr[i-k];
            sum+=arr[i];
            ans.push(sum);
      }
      console.log(ans);
      console.log(findMax(ans));
  }
  function findMax(arr){
      let N=arr.length;
      let max=Number.MIN_SAFE_INTEGER;
      for(let i=0;i<N;i++)
      {
          if(arr[i]>max){
              max=arr[i];
          }
      }
      return max;
  }
  if (process.env.USER === "siddharth") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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