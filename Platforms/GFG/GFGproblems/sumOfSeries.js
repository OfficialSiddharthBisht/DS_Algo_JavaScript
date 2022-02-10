/*
? Sum Of Series : -
Problem Link : - https://practice.geeksforgeeks.org/problems/sum-of-series2811/1/?problemStatus=unsolved&problemType=functional&difficulty[]=-2&page=1&sortBy=submissions&query=problemStatusunsolvedproblemTypefunctionaldifficulty[]-2page1sortBysubmissions

Solution Link  : https://youtu.be/LgdwKeyao0Q
Write a program to find the sum of the given series 1+2+3+ . . . . . .(N terms) 

Example 1:

Input:
N = 1
Output: 1
Explanation: For n = 1, sum will be 1.
Example 2:

Input:
N = 5
Output: 15
Explanation: For n = 5, sum will be 1
+ 2 + 3 + 4 + 5 = 15.
Your Task:
Complete the function seriesSum() which takes single integer n, as input parameters and returns an integer denoting the answer. You don't to print answer or take inputs.

Expected Time Complexity: O(1)
Expected Auxiliary Space: O(1)

Constraints:
1 <= N <= 105
*/

// * 1  By Formula O(1)
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
    for(let i=0;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.seriesSum(n));
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @return {integer}
 */
class Solution {
    seriesSum(n) {
        // code here
        let sum = 0;
        sum = (n*(n + 1)) / 2
        return sum;
    }
}

// * By Loop O(N)
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
    for(let i=0;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.seriesSum(n));
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @return {integer}
 */
class Solution {
    seriesSum(n) {
        // code here
        let sum = 0;
        for(let i = 1; i <= n; i++){
            sum +=i; 
        }
        return sum;
        S = n(n+1)/2
        return sum;
    }
}