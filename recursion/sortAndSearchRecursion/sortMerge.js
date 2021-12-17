/* You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.

USING ANY OTHER ALGORITHM OR IN BUILT FUNCTION WOULD LEAD TO DISQUALIFICATION

Input Format:

First line of input contains N

Next line contains N space separated integers.

Constraints:

N < 1000000

Output
Output the sorted form of provided numbers

Sample Input 1 

5
3 5 0 9 8

Sample Output 1

0 3 5 8 9
*/
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));

    return merge(left, right);
}

function merge(first, second) {
    let mix = [];
    let i = 0; // pointer for array first
    let j = 0; // pointer for array second
    let k = 0; // pointer for new array mix
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            mix[k] = first[i];
            i++;
        } else {
            mix[k] = second[j];
            j++;
        }
        k++;
    }
    //it may be possible that one of the arrays is not complete in these case we copy the remaining elements
    while (i < first.length) {
        mix[k] = first[i];
        i++;
        k++;
    }
    while (j < second.length) {
        mix[k] = second[j];
        j++;
        k++;
    }
    return mix;
}
function runProgram(input) {
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(mergeSort(arr));
}
if (process.env.USER === "siddharth") {
    runProgram(`5
    3 5 0 9 8`);
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
