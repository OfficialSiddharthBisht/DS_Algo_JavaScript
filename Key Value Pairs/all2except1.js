/* Given an array A of n elements, every element appears twice in the array except for one element. Find the element that is uniquely present in the array.

In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. Find that particular element.

Input Format :- 
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the size of the array A.

The second line of each test case contains n integers (1 ≤ n ≤ 100000) - The elements of the array A.

Output Format :-
For each test case, print the answer: The unique element.

Sample Input 1 
2
1
5
5
1 2 1 3 2

Sample Output 1
5
3

Hint:- 

In the first sample test case, the array contains only a single element, therefore, the only unique element is 5

In the second sample test case, the unique element in the array is3, which is the required output
*/
function all2Except1(N, arr) {
    let obj = {};
    for (let i = 0; i < N; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }
}
function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = parseInt(input[0]);
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let N = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(all2Except1(N, arr));
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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
