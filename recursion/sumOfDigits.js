/* Sum Of Individual Digits
Given an integer N , to print the sum of all the digits of N

Input Format
First and only line of Input contains the number N

Output Format 
Print the sum of the digits in single line

Input :-
1345

Output :-
10          

Hint :-
* 1+3+4+5=10
Therefore Ouptut is  10
*/
function sumOfDigits(N) {
    if (N % 10 === 1) {
        return N;
    }
    return (N % 10) + sumOfDigits(Math.floor(N / 10));
}

function runProgram(input) {
    let N = parseInt(input);
    console.log(sumOfDigits(N));
}
runProgram(`1342`);
