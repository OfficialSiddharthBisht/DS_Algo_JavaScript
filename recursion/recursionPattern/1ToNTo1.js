/* Given a number N, print the numbers from N to 1 then 1 to N using recursion.

Input Format :-
First line of Input contains the number N

Output Format :-
Print the number first from N to 1 then 1 to N

Input :-
5

Output :-
5
4
3
2
1
1
2
3
4
5
*/
function oneToNTo1(N) {
    if (N === 0) {
        return;
    }
    console.log(N);
    oneToNTo1(N - 1);
    console.log(N);
}

function runProgram(input) {
    let N = parseInt(input);
   oneToNTo1(N);
}

runProgram(`5`);
