/* Siddharth has discovered his own sorting algorithm. The algorithm has following conditions:
1. Given an integer k,  sort the values in the array according to their modulo with k. That is, if there are two integers a and b, and a%k < b%k, then a would come before b in the sorted array.

2. If a%k = b%k, then the integer which comes first in the given array remains first in the sorted array.

Your task is to write a program that sorts the given array as per above mentioned condition and print the sorted array.

Input Format :

The first line consists of two integers N and k, N being the number of elements in the array and k is the number with which we need to take the modulo.

The next line consists of N space separated integers , denoting the elements of the array A.

Constraints :

N < 10000

K < 1000000000

Integers of array < 10000000000

Output Format
Print the modulo sorted array of the given array.


? Input 
5 6
12 18 17 65 46

? Output 

12 18 46 17 65

* Hint

12%6=0

18%6=0

17%6=5

65%6=5

46%6=4

So, the sorted order is: 12 18 46 17 65
12 and 18 have same result on modulo , so, 12 remains first in sorted array as it is first in given array
*/
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N, K] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    ownSortingAlgo(N, K, arr);
}

// since in this code the relative order is important therefore we use bubble sort (at last )
function ownSortingAlgo(N, K, arr) {
    for(let i=0;i<N-1;i++){
        for(let j=0;j<N-1-i;j++){
            if(arr[j]%K>arr[j+1]%K){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr.join(" "));
}
if (process.env.USER === "siddharth") {
    runProgram(`5 6
    12 18 17 65 46`);
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
/* 
Why not the selection sort

12 18 17 65 46   Actual Array
0  0  5  5  4    Modulo Array

Selection Sort in Modulo Array
12 18 46 65 17  //*but the ans should be 18 18 46 17 65 
0  0  4  5  5   //* maintaining the relative order of the array

Bubble Sort in Modulo array maintains the relative order of the array 
therefore we use bubble sort.
*/