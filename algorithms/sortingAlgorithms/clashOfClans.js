/* You are playing the popular game of "Clash Of Clans". You are the king of the empire where you have 2N workers.

All workers will be grouped in the association with size 2, so a total of N associations have to be formed.

The building speed of the i-th worker is A[i].

To make an association, you pick up 2 workers. Let the minimum building speed between both workers be x, then the association has the resultant building speed x.

You have to print the maximum value possible of the sum of building speeds of N associations if you make the associations optimally.

Input Format 
First line contains an integer N, representing the number of associations to be made.

Next line contains 2N space separated integers, denoting the building speeds of 2N workers.

N <= 50000

A[i] <= 10000

Output Format - 
Print the maximum value possible of the sum of building speeds of all the associations.

? Input 
2
1 3 1 2

? Output
3

*Hint
If you make an association using the first and third worker, and another using the second and fourth worker, each association will have 1 and 2 resultant building speed, which has a total of 3.
*/
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    clashOfClans(N, arr);
}
// here we can't use any inbuilt sorting technique we have learned so far since both bubble sort and selection sort is of Time Complexity of O(N*N)  but the constraints given to us is <=5*10^4
// Here N*N *2 times means 5 *10^8 to 5*10^9 which will show the error of time limit exceeeded
function clashOfClans(N, arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    let sum = 0;
    let minNo=0;
    for (let i = 0; i < (N*2)-1 ;i=i+2){
        minNo = Math.min(arr[i], arr[i+1]);
        sum+=minNo;
    }
    console.log(sum);
}
if (process.env.USER === "siddharth") {
    runProgram(`2
    1 3 1 2`);
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
