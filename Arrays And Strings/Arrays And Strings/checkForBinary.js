/* 
? Check For Binary 
Ques Source :- https://practice.geeksforgeeks.org/problems/check-for-binary/1/?problemType=functional&difficulty[]=-2&page=1&sortBy=submissions&query=problemTypefunctionaldifficulty[]-2page1sortBysubmissions#
Input:
str = 101
Output:
1
Explanation:
Since string contains only 0 and 1, output is 1.
Example 2:

Input:
str = 75
Output:
0
Explanation:
Since string contains digits other than 0 and 1, output is 0.
 
Your Task:
Complete the function isBinary() which takes an string str as input parameter and returns 1 if str is binary and returns 0 otherwise.

Expected Time Complexity: O(|s|)
Expected Auxiliary Space: O(1)

Constraints:
1 <=T<= 50
1 <=Length of str<= 10000
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
        let str = readLine();
        let obj = new Solution();
        let res = obj.isBinary(str);
        if(res === true){
            console.log(1);
        }
        else{
            console.log(0);
        }
        
    }
}// } Driver Code Ends
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} str
 * @returns {boolean}
*/

class Solution{
    isBinary(str){
        //code here
        let i = 0;
        while(str[i]){
            if(str[i]!=='0'&&str[i]!=='1'){
                return false;
            }
            i++;
        }
        return true;
        
    }
}
