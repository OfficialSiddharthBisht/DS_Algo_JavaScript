/*
Substring under condition -
You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.
Input Format :
First and the only line contains a strings
Constraints:
1 <= Length of s <= 1000
Output
Print the count of total number of such substrings starting and ending with same characters.
--------------------------------------------------------
? Input 
abcab
--------------------------------------------------------
? Output
7
-------------------------------------------------------
Hint
Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.
So total count is 7. Hence we print 7.
*/
// optimised - sum of n positive integers explanation - https://www.youtube.com/watch?v=Z3-B9w5d8vM
function subStrUnderCond(s) {
    //write code here
    let N = s.length;
    let ans = 0;
    let obj = {};
    for (let i = 0; i < N; i++) {
        if (obj[s[i]] == undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] = obj[s[i]] + 1;
        }
    }
    // console.log(obj);
    for (let key in obj) {
        ans = ans + (obj[key] * (obj[key] + 1)) / 2;
        // S =n*(n+1)/2
    }
    console.log(ans);
}

subStrUnderCond("abcab"); // expected output 7

// bruteforce (Time Complexity - O(N*N) , Space Complexity- O(1))
function subStrUnderCondBruteForce(s) {
    let count = 0;
    let N = s.length;
    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            if (s[i] === s[j]) {
                count++;
            }
        }
    }
    console.log(count);
}
