/* Given an integer N a one digit number K ,to count the number of Ks in N.

Input Format :-
First line of input contains integer N 
Second line contains integer K

Output Format :-
Print the number of K in integer N
-----------------------------------
Input :-
30204
0

Output :-
2
-----------------------------------
Hint :-
The number of 0s in the input is 2 .
*/
function countK(N, K, count = 0) {
    if (N === 0) {
        return count;
    }
    if (N % 10 === K) {
        return countK(Math.floor(N / 10), K, (count += 1));
    }
    return countK(Math.floor(N / 10), K, count);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = parseInt(input[0].trim());
    let K = parseInt(input[1].trim());
    console.log(countK(N, K));
}
runProgram(`3020406
0`);
