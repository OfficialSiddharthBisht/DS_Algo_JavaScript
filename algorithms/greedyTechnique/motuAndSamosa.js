/*
? Motu Patlu And Samosa :-
Motu went down to the Samosa street to have some. But he only has K units of money with him. There are N shops on the street and unfortunately, all of them have only one samosa remaining. You are also given an array A, where Ai is the cost of a samosa on the i'th shop.

Find the maximum samosas that Motu can eat.

Input Format
First line contains two space-separated integers N and K.
Second line contains N space separated integers, the cost of a samosa on the shops.

Output Format
1 ≤ N ≤ 1000
0 ≤ K ≤ 1000
0 ≤ Ai ≤ 100

Output Format
Print the required answer

Sample Input 1 
4 10
5 4 2 4

Sample Output 1
3
*/
function motuAndSamosa(N, K, arr) {
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    let sum = 0;
    let count = -1;
    let i = 0;
    while (sum <= K) {
        sum += arr[i];
        i++;
        count++;
    }
    return count;
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N, K] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(motuAndSamosa(N, K, arr));
}
if (process.env.USER === "siddharth") {
    runProgram(`4 10
    5 4 2 4`);
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
