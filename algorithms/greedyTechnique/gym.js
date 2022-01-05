/*
* Gym Problem :-
Sam is the owner of gym and he gives advice to all his body-builders and he needs to prepare them such that the sum of their strengths is maximum.

A builder having original strength s, after eating protein bar of calorie value c will have strength s*c

Each protein bar can be eaten only once and by only one person.

Input Format:

The first line of the input will consist of n, the number of body-builders as well as the number of protein bars.

The second line will consist of n space-separated integers s[i], the original strength of body-builders

The third line consists of n space-separated integers c[i], the calorie value of protein bars.

Constraints:

1 ≤ n ≤ 10^6

1 ≤ si ≤ 10^6

1 ≤ ci ≤ 10^6

Output Format :-
An integer which is the maximum value of sum of the final strengths of the body-builders that can be obtained.

Sample Input 1 
2
3 1
4 3

Sample Output 1
15
*/
function maxStrength(N, strength, calorie) {
    strength = strength.sort((a, b) => a - b);
    calorie = calorie.sort((a, b) => a - b);
    sum = 0;
    for (let i = 0; i < N; i++) {
        sum += strength[i] * calorie[i];
    }
    return sum;
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let strength = input[1].trim().split(" ").map(Number);
    let calorie = input[2].trim().split(" ").map(Number);
    console.log(maxStrength(N, strength, calorie));
}
if (process.env.USER === "siddharth") {
    runProgram(`2
    3 1
    4 3`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
