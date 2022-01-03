/*
* GFG - Square root of a Number
https://practice.geeksforgeeks.org/problems/square-root/1

Given an integer x, find the square root of x. If x is not a perfect square, then return floor(√x).

Example 1:

Input:
x = 5
Output: 2
Explanation: Since, 5 is not a perfect 
square, floor of square_root of 5 is 2.
Example 2:

Input:
x = 4
Output: 2
Explanation: Since, 4 is a perfect 
square, so its square root is 2.
 
Your Task:
You don't need to read input or print anything. The task is to complete the function floorSqrt() which takes x as the input parameter and return its square root.
Note: Try Solving the question without using sqrt Function.

Expected Time Complexity: O(log N)
Expected Auxiliary Space: O(1)

Constraints:
1 ≤ x ≤ 107

View Bookmarked Problems
Company Tags :-
* Accolite
* Amazon 
* Flipkart 
* Microsoft 
* VMWare
Topic Tags
Mathematical 
Searching 
Binary Search
*/
// { Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.floorSqrt(n));
        
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @returns {number}
*/

class Solution {
    
    floorSqrt(x)
    {
        //your code here
        let low = 1;
        let high = x;
        let ans = 0; 
        while(low <= high){
            let mid = low + Math.floor((high - low) / 2);
            if(mid * mid === x){
                return mid;
            }
            if(mid * mid < x){
                low = mid + 1;
                ans = mid;
            }
            if(mid * mid > x){
                high = mid - 1;
            }
        }
        return ans;
    }
}