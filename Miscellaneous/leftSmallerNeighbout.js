/* Andy and Mark are playing a game of arrays.
The game involves finding the smallest neighbor element to the left side for each element in the array

Andy counts the number of elements which do have a smaller neighbor element to the left side. Help Andy find the count

Input Format:

First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

Second line contains N space separated integers denoting the elements of the array.

Constraints:

N <= 100000

Output Format :- 
Print a single integer denoting the number of elements which do not have a smaller neighbor element to the left side

Sample Input
8
39 27 11 4 24 32 32 1

Sample Output
3

Hint
The element at index4 5 & 6do have a smaller neighbor elements to the left side. Therefore, the answer is 3
*/
function leftSmallerElement(N, arr) {
    let count = 0;
    let i=1;
    while(i<N){
        if(arr[i-1]<arr[i]){
            count++
        }
        else{
            let j=i-1;
            while(j>=0){
                if(arr[j]<arr[i]){
                    count++
                    break;
                }
                j--;
            }
        }
        i++;
    }
    console.log(count);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    leftSmallerElement(N, arr);
}
if (process.env.USER === "siddharth") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
