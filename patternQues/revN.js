/*You are given a matrix of size n x n. Find the ReverseNtraversal of the matrix. Refer the following figure for better understanding.
Input Format :
The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.

Next N lines contain N space separated integers, denoting the values of the matrix.

Constraints

1 <= T <= 10

1 <= N <= 500

1 <= A[i][j] <= 1000

Output Format :-  
For each test case, print the N traversal of the matrix on a single line, on a new line.

Sample Input 
1
3
1 2 3
4 5 6
7 8 9

Sample Output

1 4 7 5 3 6 9 
*/
function revN(N, arr) {
    let ans = "";
    // if there is only one element :-
    if (N === 1) {
        console.log(arr[0][0]);
        return;
    } else {
        //1st column
        for (let i = 0; i < N; i++) {
            ans += arr[i][0] + " ";
        }
        // from middle
        for (let i = 1; i < N - 1; i++) {
            for (let j = 1; j < N - 1; j++) {
                if (i + j === N - 1) {
                    ans += arr[j][i] + " ";
                }
            }
        }
        // last column
        for (let i = 0; i < N; i++) {
            ans += arr[i][N - 1] + " ";
        }
        console.log(ans);
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let line = 1;
    let testCases = +input[0];
    for (let k = 0; k < testCases; k++) {
        let N = +input[line++];
        let arr = [];
        for (let i = line; i < line + N; i++) {
            arr.push(input[i].trim().split(" ").map(Number));
        }
        revN(N, arr);
        line += N;
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`);
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
