/*Given an array of N elements, find the next greater element for each element in the array, print -1 if it does not exits. Refer to the sample I/O for better understanding

Input Format :- 
The first line contains T, the number of test cases.

The first line of each test case contains N, the number of elements in the array. The next line contains N space separated integers denoting the elements of the array

Constraints

1 <= T <= 10

1 <= N <= 10^5

0 <= A[i] <= 10000

Output
For each test case, print N space separated integers, denoting the next greater element for each element,  on a new line.

Sample Input 1 

1
4
1 3 2 4

Sample Output 1

3 4 4 -1

Hint

In the sample test case, the array contains 4 elements, and for the first element, the next greater element will be 3, similarly for the next element, the next greater element will be 4, and for the third element as well, the next greater element will be 4. Since, the last element has no elements ahead of it, the next greater element will be -1.
*/
function nextGreaterElementBF(N,arr){
    let output="";
    for(let i=0;i<N;i++){
        let ans=-1
        for(let j=i+1;j<N;j++){
            if(arr[j]>arr[i]){
                ans=arr[j];
                break;
            }
        }
        output+=ans+" ";
    }
    console.log(output);
}
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let testCases = +input[0];
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let N = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        nextGreaterElementBF(N, arr);
    }
}
if (process.env.USER === "siddharth") {
    runProgram(`1
    4
    1 3 2 4`);
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
