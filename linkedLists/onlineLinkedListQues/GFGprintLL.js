/*
Print Linked List Elements : -
Problem Source : https://practice.geeksforgeeks.org/problems/print-linked-list-elements/1/?problemType=functional&difficulty[]=-1&page=1&sortBy=submissions&query=problemTypefunctionaldifficulty[]-1page1sortBysubmissions#
Given a linked list. Print all the elements of the linked list.

Example 1:

Input:
N=2
LinkedList={1 , 2}
Output:
1 2
Explanation:
The linked list contains two 
elements 1 and 2.The elements 
are printed in a single line.
Example 2:

Input:
N = 3
Linked List = { 49, 10, 30}
Output: 
49 10 30
Explanation:
The linked list contains 3 
elements 49, 10 and 30. The 
elements are printed in a single 
line.
Your task:
You don't need to read input or print anything. Your task is to complete the function display() which takes the head of the linked list as input and prints the linked list in a single line.
 
Expected Time Complexity : O(N)
Expected Auxiliary Space : O(1)
 
Constraints :
1 <= N <= 100

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

class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}


function main() {
  let t = parseInt(readLine());
  let i = 0;
 
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine().trim().split(" ").map((x) => parseInt(x));

    let head = new Node(arr[0]);
    let tail = head;
    for(let j = 1;j<n;j++){
      tail.next = new Node(arr[j]);
      tail = tail.next;
    }
    let obj = new Solution();
    obj.display(head);
 
  }

}// } Driver Code Ends


//User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/


/**
 * @param {Node} head
*/

class Solution {
  display(head){
    //code here
    let ans = "";
    let curr = head;
    while(curr!==null){
        ans+=curr.data +" ";
        curr = curr.next;
    }
    console.log(ans);
  }
}