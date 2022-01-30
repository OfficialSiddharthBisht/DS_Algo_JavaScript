/*
Source : - https://practice.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1/?problemType=functional&difficulty[]=-2&page=1&sortBy=submissions&query=problemTypefunctionaldifficulty[]-2page1sortBysubmissions

Print alternate elements of an array 
School Accuracy: 50.02% Submissions: 60584 Points: 0
You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0).

Example 1:

Input:
N = 4
A[] = {1, 2, 3, 4}
â€‹Output:
1 3
Example 2:

Input:
N = 5
A[] = {1, 2, 3, 4, 5}
â€‹Output:
1 3 5
Your Task:
Since this is a function problem, you just need to complete the provided function void print(int ar[],int n)

Constraints:
1 <= N <= 105
1 <= Ai <= 105

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/
// { Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;



process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}


function main() {
  let t = parseInt(readLine());
  let i = 0;
 
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine().trim().split(" ").map((x) => parseInt(x));
    let obj = new Solution();
    obj.print(arr,n);
  }

}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
*/

class Solution {
  print(arr,n){
    let ans ="";
    for(let i = 0 ;i <n ;i=i+2){
        ans+=arr[i]+" ";
    }
    console.log(ans);
  }
}
// level  - basic