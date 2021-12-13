/* Reverse a number 
 Given an integer N , to reverse the number .
 
 Input :-
 First and only line contains a number N 

 Output :- 
 Print the reverse of the number without any spaces in a single line

 Input :-
 12345

 Output :- 
 54321
 */
function reverseNum(N) {
    let str = "";
    if (N % 10 === 1) {
        str += N;
        return N;
    }
    str += N % 10;
    str += reverseNum(Math.floor(N / 10));
    return str;
}

function runProgram(input) {
    let N = parseInt(input);
    console.log(reverseNum(N));
}
runProgram(`123645`);
