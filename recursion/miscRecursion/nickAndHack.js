/* 
Tom and Nick are good friends . Once Tom asked Nick exactly N rupees , but Nick only has 1 rupee in his bank account.
Nick wants to help his friend so he wrote two hacks . First hack can multiply the amount of money he owns by 10 , while the second can multiply it by 20 . These hacks can be used any number of times .
Can Nick help Tom with his hacks ?
--------------------------------------------
* Input Format :-
The first line of input contains a single integer T denoting the number of test cases .
The description of T test cases follows . The first and only line of each test case contains a single integer N.
--------------------------------------------
Contraints :-
1 <= T <=100
1 <= N <= 10^12
---------------------------------------------
* Output Format :-
For each test case , print a single line containing the string "Yes" if you can make exactly N rupees or "No" otherwise .
---------------------------------------------
* Sample Input :-
5
1
2
10
25
200
--------------------------------------------
* Sample Output :-
Yes
No
Yes 
No 
Yes
---------------------------------------------
* Hint :-
In the test case Nick can get Rs 200 by first using 10x hack and then ysing 20x hack once .
*/
function nickHack(N) {
    if (N === 1) {
        return true;
    }
    if (N % 10 === 0 || N % 20 === 0) {
        return true;
    }
    nickHack(Math.floor(N / 10));
    nickHack(Math.floor(N / 20));
    return false;
}

function revNickHack (curr,N) {
    if(curr===N){
        return true;
    }
    if(curr>N){
        return false;
    }
    return revNickHack(curr*10,N)||revNickHack(curr*20,N);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = parseInt(input[0]);
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let N = parseInt(input[line++]);
        // if (nickHack(N)) {
        //     console.log("Yes");
        // } else {
        //     console.log("No");
        // }
        if (revNickHack(1,N)) {
            console.log("Yes");
        } else {
            console.log("No");
        }
        
    }
}
runProgram(`5
1
2
10
25
200`);
