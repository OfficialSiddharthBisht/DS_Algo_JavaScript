/*
Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
* Problem Link :- https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1/?page=1&category[]=Arrays&sortBy=submissions#
Sol Video Link :- https://youtu.be/6qqb8Aup3Zw

Example 1:

Input:
N = 5
A[] = {1,2,3,5}
Output: 4
Example 2:

Input:
N = 10
A[] = {6,1,2,8,3,4,7,10,5}
Output: 9

Your Task :
You don't need to read input or print anything. Complete the function MissingNumber() that takes array and N as input  parameters and returns the value of the missing number.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

Constraints:
1 ≤ N ≤ 106
1 ≤ A[i] ≤ 106

View Bookmarked Problems
Company Tags
Accolite 
Adobe 
Amazon 
Cisco 
D-E-Shaw 
Intuit 
Microsoft 
Morgan 
Stanley 
Ola Cabs
 Payu 
Qualcomm 
Visa 
Flipkart
*/

function missingNumInArr(N , arr ){
    let sumAp = parseInt(N * (N + 1) / 2);
    let sumOfArr = 0;
    for(let i = 0; i < N - 1; i++){
        sumOfArr += arr[i];
    }
    return sumAp - sumOfArr;
}

console.log(missingNumInArr(5 , [1,2,3,5]));
console.log(missingNumInArr(10,[6,1,2,8,3,4,7,10,5]));