/* Product Of Individual Digits
Given an integer N , to print the product of all the digits of N

Input Format :- 
First and only line of Input contains the number N

Output Format :- 
Print the sum of the digits in single line

Input :-
1345

Output :-
60

Hint :-
* 1*3*4*2=24
Therefore Ouptut is 60
*/
function productOfDigits(N) {
    if (N % 10 === 1) {
        return N;
    }
    return (N % 10) * productOfDigits(Math.floor(N / 10));
}

function runProgram(input) {
    let N = parseInt(input);
    console.log(productOfDigits(N));
}
runProgram(`1342`);
