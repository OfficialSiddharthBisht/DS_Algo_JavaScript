/* 
Largest Element in Array
Problem Source : https://practice.geeksforgeeks.org/problems/largest-element-in-array4009/1/?problemStatus=unsolved&problemType=functional&difficulty[]=-1&page=1&query=problemStatusunsolvedproblemTypefunctionaldifficulty[]-1page1#

Given an array A[] of size n. The task is to find the largest element in it.
 
Example 1:

Input:
n = 5
A[] = {1, 8, 7, 56, 90}
Output:
90
Explanation:
The largest element of given array is 90.
 
Example 2:

Input:
n = 7
A[] = {1, 2, 0, 3, 2, 4, 5}
Output:
5
Explanation:
The largest element of given array is 5.
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function largest() which takes the array A[] and its size n as inputs and returns the maximum element in the array.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

Constraints:
1 <= n<= 103
0 <= A[i] <= 103
Array may contain duplicate elements. 
 
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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.largest(arr, n);
        console.log(res);
        
    }
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript

class Solution {
    largest(arr, n) {
        // write your code here
        let largest = Number.MIN_SAFE_INTEGER;
        for(let i = 0; i < n; i++){
            if(arr[i] > largest){
                largest = arr[i];
            }
        }
        return largest;
    }
}