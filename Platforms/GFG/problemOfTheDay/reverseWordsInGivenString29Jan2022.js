/* Problem Of the day - GFG Date 29 Jan 2022
Reverse words in a given string :-

Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

Example 1:

Input:
S = i.like.this.program.very.much
Output: much.very.program.this.like.i
Explanation: After reversing the whole
string(not individual words), the input
string becomes
much.very.program.this.like.i
Example 2:

Input:
S = pqr.mno
Output: mno.pqr
Explanation: After reversing the whole
string , the input string becomes
mno.pqr

Your Task:
You dont need to read input or print anything. Complete the function reverseWords() which takes string S as input parameter and returns a string containing the words in reversed order. Each word in the returning string should also be separated by '.' 


Expected Time Complexity: O(|S|)
Expected Auxiliary Space: O(|S|)


Constraints:
1 <= |S| <= 2000

View Bookmarked Problems
Company Tags
Accolite 
Adobe 
Amazon 
Cisco 
Goldman Sachs 
MakeMyTrip 
Microsoft 
Paytm 
Samsung 
SAP Labs
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
        let input_line = readLine().split(' ');
        let s = input_line[0];
        let obj = new Solution();
        let ans = obj.reverseWords(s);
        console.log(ans);
    }
}// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
*/
 

class Solution 
{
    //Function to reverse words in a given string.
    reverseWords(s)
    {
        // code here
        s = s.trim().split(".");
        let ans = [];
        for(let i = s.length - 1; i >=0 ; i--){
            ans.push(s[i]);
        }
        return ans.join(".");
    }
}