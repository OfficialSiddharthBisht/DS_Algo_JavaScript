/* 
? Force Of An Array
Let's consider some array A. The following algorithm calculates it's a force:

- Find all the continuous blocks where all the elements of A are equal.

- Calculate the sum of squared lengths of these blocks.

For example if array A = {2, 3, 3, 1, 1, 1, 4, 2, 2} its force will be 1^2 + 2^2 + 3^2 + 1^2 + 2^2 = 19 because first element is present once, so 1 ^ 2 , second element (3) is present twice to 3^2, again...so on and so forth..and you sum all these up to find the force.

We can reorder some elements and get array with greater force. In the example above we can move the first element of A to the end and get array A = {3, 3, 1, 1, 1, 4, 2, 2, 2} with force 2^2 + 3^2 + 1^2 + 3^2 = 23.

You are given an array. What is the maximum force you can get by reordering some of its elements?


Input
Input Format:

The first line contains integer T denoting the number of test cases. The following T lines contain 4 integers each: A[0], A[1], N, MOD.

Array A of N elements is generated by the following way:

A[0], A[1] are given

A[i] = (A[i - 1] + A[i - 2]) modulo MOD for 1 < i < N.

Constraints:

1 <= T <=100

0 <= A[0], A[1] <= 10^6

2 <= N <= 10^6

max(A[0] , A[1]) < MOD < 10^6

Output Format : -
For each test case output one integer on the separate line - answer for the question.

Sample Input 1 
2
0 1 6 4
1 1 4 2

Sample Output 1
12
10
*/
function forceOfAnArr(a, b, N, mod) {
    arr = [];
    arr.push(a);
    arr.push(b);
    for (let i = 2; i < N; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % mod;
    }
    let sum = 0;
    let obj = {};
    for (let i = 0; i < N; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    for (let key in obj) {
        sum += obj[key] * obj[key];
    }
    return sum;
}

function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = parseInt(input[0]);
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let [a0, a1, N, mod] = input[line++].trim().split(" ").map(Number);
        console.log(forceOfAnArr(a0, a1, N, mod));
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`2
    0 1 6 4
    1 1 4 2`);
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
/* My Algorithm 
1- To find the series element f(n-1)+f(n-2) % mod
2 - Count the number of times each element is coming using key value pairs
3 - Add the square of number of times each value come to sum variable and return it . 
*/