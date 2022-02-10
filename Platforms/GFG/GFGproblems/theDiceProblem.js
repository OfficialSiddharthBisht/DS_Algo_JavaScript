/*
? The Dice Problem : -

Problem Link : - https://practice.geeksforgeeks.org/problems/the-dice-problem2316/1/?problemStatus=unsolved&problemType=functional&difficulty[]=-2&page=2&sortBy=submissions&query=problemStatusunsolvedproblemTypefunctionaldifficulty[]-2page2sortBysubmissions

* Solution Video Link : - https://youtu.be/45J41lzKG4Q

 You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. The numbers are in the range of 1 to 6, like any ordinary dice. You will be provided with a face of this cube, your task is to guess the number on the opposite face of the cube.

Example 1:

Input:
N = 6
Output:
1
Explanation:
For dice facing number 6 opposite face
will have the number 1.
Example 2:

Input:
N = 2
Output:
5
Explanation:
For dice facing number 5 opposite face
will have the number 2.
Your Task:  
You don't need to read input or print anything. Your task is to complete the function oppositeFaceOfDice() which takes an integer N as an input parameter and return the number on the opposite face of the dice.

Expected Time Complexity: O(1)
Expected Auxiliary Space: O(1)

Constraints:
1 <= N <= 6
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
    let N = parseInt(readLine());
    let obj = new Solution();
    let res = obj.oppositeFaceOfDice(N);
    console.log(res);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */
class Solution {
  oppositeFaceOfDice(N) {
    //code here
    let ans = 7 - N;
    return ans;
  }
}