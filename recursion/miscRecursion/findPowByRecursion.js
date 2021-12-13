/* Given two integers a and b, we need to find the value of a^b recursively.
Expected Time Complexity - O(logb).

Input Format :-
The first line of the input contains two integers a and b (1 ≤ a ≤ 10) and (0 ≤ b ≤ 9).

Output Format :-
For each test case, print the answer: The value of a^b.

Sample Input 1 
2 4

Sample Output 1
16
*/
function runProgram(input) {
    let [a, b] = input.trim().split(" ").map(Number);
    console.log(powerByRecursion(a, b));
}

function powerByRecursion(a, b) {
    if (b === 0) {
        return 1;
    }
    return a * powerByRecursion(a, b - 1);
}
if (process.env.USER === "siddharth") {
    runProgram(`2 10`);
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
