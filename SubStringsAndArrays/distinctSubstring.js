/*
 * Distinct Substrings
Given a string s of length n, find out the number of distinct substrings possible from the given string.

Input
The first line of the input contains one integer t (1 ≤ t ≤ 100) — the number of test cases. Then t test cases follow.
The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — the length of the string.
The second line of each test case contains a string s of length n.

Output
For each test case, print the answer: The number of distinct substrings possible from given string.
Sample Input 1 
2
5
abcde
3
aaa

Sample Output 1
15
3
*/
function countSubStr(N ,str){
    let obj = {} ;
    let count = 0;
    for(let i = 0; i < N; i++){
        for(let j = i; j < N; j++){
            let subStr = "";
            for(let k = i; k <= j;k++){
                subStr += str[k];
            }
            if(!obj[subStr]){
                count++;
                obj[subStr] = 1;
            }else{
                obj[subStr] = obj[subStr] + 1;
            }
        }
    }
    return count;
}

function runProgram(input){
    input = input.trim().split("\n");
    let testCases = parseInt(input[0]);
    let line = 1;
    for(let t = 0; t < testCases; t++){
        let N = parseInt(input[line++]);
        let str = input[line++].trim().split(" ").join("");
        console.log(countSubStr(N ,str));
    }
}

runProgram(`2
5
abcde
3
aaa`)