/*
Using the below explanation for n-th term of e^x, calculate the value of e^x given x and n. Do not calculate it directly using the formula and do not write any iterative code.
 T(x) = 1 + x + x^2/2! + x^3/3! +......... +x^n/n!  
Input Format

First and the only line of code contains x and n respectively

Constraints

x <= 14

n <= 12


Output Format:-
Print the value to 4 places after the decimal. For example, 13.1310 is a valid answer but 13.131 is not. Also, 12 is not a valid answer but 12.0000 is a valid answer

Sample Input 1
4 2

Sample Output 1
13.0000
*/
function runProgram(input) {
    let [x, n] = input.trim().split(" ").map(Number);
    let r = n;
   console.log(eToPowX(x, r).toFixed(4));
}

function eToPowX(x, r) {
    if(r===0){
        return 1;
    }
    let ans = 0;
    let val = Math.pow(x, r);
    ans = val / factorial(r) + eToPowX(x, r - 1);
    return ans;
}

function factorial(r) {
    if (r === 0 || r === 1) {
        return 1;
    }
    return r * factorial(r - 1);
}

if (process.env.USER === "siddharth") {
    runProgram(`4 2`);
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
