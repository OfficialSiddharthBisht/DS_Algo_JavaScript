/*
? Compete The Skills 
Problem Link : - https://practice.geeksforgeeks.org/problems/compete-the-skills5807/1/?problemStatus=unsolved&problemType=functional&difficulty[]=-2&page=5&sortBy=submissions&query=problemStatusunsolvedproblemTypefunctionaldifficulty[]-2page5sortBysubmissions
-------------------------------------------------------

Solution Link : - https://youtu.be/BKbGrQQaUwM

A and B are good friend and programmers. They are always in a healthy competition with each other. They decide to judge the best among them by competing. They do so by comparing their three skills as per their values. Please help them doing so as they are busy.

Set for A are like [a1, a2, a3]
Set for B are like [b1, b2, b3]

Compare ith skill of A with ith skill of B
if a[i] > b[i] , A's score increases by 1
if a[i] < b[i] , B's score increases by 1
if a[i] = b[i] , nothing happens

 

Example 1:

Input : 
A = {4, 2, 7}
B = {5, 6, 3}
Output : 
1 2

Example 2:

Input : 
A = {4, 2, 7}
B = {5, 2, 8}
Output : 
0 2
 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function scores() which takes the array A[], B[] as inputs and two reference variables ca and cb to store the final answer. Store the score of A in ca and score of B in cb.


Expected Time Complexity: O(1)
Expected Auxiliary Space: O(1)

 

Constraints :
1 ≤ a[i] ≤ 1017
1 ≤ b[i] ≤ 1017
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
    let a = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let b = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    obj.scores(a, b);
    console.log(obj.ca, obj.cb);
  }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 */

class Solution {
  constructor() {
    this.ca = 0;
    this.cb = 0;
  }
  scores(a, b) {
    //store the scores at this.ca and this.cb
    //code here
    for(let i = 0 ; i < 3; i++){
        if(a[i] > b[i]){
            this.ca++;
        }else if(a[i] < b[i]){
            this.cb++;
        }
    }
    return [this.ca,this.cb]
  }
}
