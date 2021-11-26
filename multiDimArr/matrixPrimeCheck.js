/* In this question, you are given a 2D array stored in a variable with the namearr

The number of rows in the matrix is stored in the variable with the nameN, while the number of columns stored in the matrix is stored in a variable with the nameM

You have to find and print the count of prime numbers present in the matrix

For example, consider the value stored inN = 3, andM = 3, and

N = 3 M = 3

arr = [[1 2 3]
       [4 5 6]
       [7 8 9]]
The prime numbers in the 2D array are2,3,5,7. Therefore, the required output is 4

Note : The 2D array may contain duplicate elements. Each instance of a prime number should be counted separately

Input
The first line of the input contains the values stored inNandM

The next line contains the values stored inarr


Output Format :
Print the count of prime numbers present in the matrix

Sample Input 1 

3 3
1 2 3 
4 5 6
7 8 9

Sample Output 1
4

Hint
In the sample test case, the value stored inN = 3, andM = 3, and

N = 3 M = 3

arr = [[1 2 3]
       [4 5 6]
       [7 8 9]]
The prime numbers in the 2D array are2,3,5,7. Therefore, the required output is 4
*/
function twoDPrimeCheck(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (isPrime(arr[i][j])) {
                count++;
            }
        }
    }
    console.log(count);
}
function isPrime(num) {
    if (num === 1 || num === 0) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function runProgram(input) {
    input = input.trim().split("\n");
    let [N, M] = input[0].trim().split(" ").map(Number);
    let arr = [];
    let line = 1;
    for (let i = 0; i < N; i++) {
        arr.push(input[line++].trim().split(" ").map(Number));
    }
    twoDPrimeCheck(arr);
}
if (process.env.USER === "siddharth") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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
