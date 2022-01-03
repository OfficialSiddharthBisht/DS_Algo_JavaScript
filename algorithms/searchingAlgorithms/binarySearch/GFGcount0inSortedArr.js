/*
* Count The Zeros In Sorted Array

https://practice.geeksforgeeks.org/problems/count-the-zeros2550/1

Given an array of size N consisting of only 0's and 1's. The array is sorted in such a manner that all the 1's are placed first and then they are followed by all the 0's. Find the count of all the 0's.

Example 1:

Input:
N = 12
Arr[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0}
Output: 3
Explanation: There are 3 0's in the given array.

Example 2:

Input:
N = 5
Arr[] = {0, 0, 0, 0, 0}
Output: 5
Explanation: There are 5 0's in the array.

Your Task:
You don't need to read input or print anything. Your task is to complete the function countZeroes() which takes the array of integers arr[] and its size n as input parameters and returns the number of zeroes present in the array.


Expected Time Complexity: O(logN)
Expected Auxiliary Space: O(1)

Constraints:
1 <= N <= 105
0 <= Arr[i] <= 1
 
Company Tags :-
* Amazon 
* Yahoo
Topic Tags
Arrays
Searching
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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.countZeroes(arr,n);
        console.log(res);
    
    }
}// } Driver Code Ends


//User function Template for javascript

class Solution {
    countZeroes(arr, n) {
        // write your code here
        let low = 0;
        let high = n - 1;
        let count = 0;
        while(low<=high){
            let mid = low + Math.floor((high - low) / 2);
            if(arr[mid]===0){
                count ++;
                high--;
            }
            if(arr[mid] > 0){
                low = mid + 1;
            }
        }
        return count;
    }
}

