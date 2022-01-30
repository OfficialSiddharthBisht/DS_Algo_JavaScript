/*
Value Equal To Index : -
Question Index Source : https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/0/?problemType=functional&difficulty[]=-2&page=1&sortBy=submissions&query=problemTypefunctionaldifficulty[]-2page1sortBysubmissions#

Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).

Example 1:

Input: 
N = 5
Arr[] = {15, 2, 45, 12, 7}
Output: 2
Explanation: Only Arr[2] = 2 exists here.
Example 2:

Input: 
N = 1
Arr[] = {1}
Output: 1
Explanation: Here Arr[1] = 1 exists.
Your Task:  
You don't need to read input or print anything. Your task is to complete the function valueEqualToIndex() which takes the array of integers arr[] and n as parameters and returns an array of indices where the given conditions are satified. When there is not such element exists then return an empty array of length 0.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
Note: There can be more than one element in the array which have same value as their index. You need to include every such element's index. Follows 1-based indexing of the array.

Constraints:
1 ≤ N ≤ 105
1 ≤ Arr[i] ≤ 106

Company Tags :-
*Amazon 
*FactSet 
*Hike 
*Flipkart

Related Interview Experiences
 Flipkart interview set 3
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

function printList(res){
    if(!res) return;
    let s="";
    for(let i=0;i<res.length;i++){
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
        let res = obj.valueEqualToIndex(arr, n);
        printList(res);
        
    }
}// } Driver Code Ends

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution{
    valueEqualToIndex(arr,n){
        //code here
        let ans = "";
        for(let i = 0; i < n; i++){
            if(arr[i]===i+1){
                ans += arr[i]+" ";
            }
        }
        if(ans==""){
            console.log("Not Found");
            return; 
        }
        console.log(ans);
    }
}


