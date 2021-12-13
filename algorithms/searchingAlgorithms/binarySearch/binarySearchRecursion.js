/* Given an array arr with its size N and a target k find the target in the array using binary search .

Input Format :-

First line contains size of the array N and K respectivelly .
Second line contains the elements of the array.

Output Format :-

Output index of the element if the element is present in the array else print -1

Input 1 :-
5 6
1 2 3 4 5

Ouptut 2 :-
No

Input 2 :-
10 8
1 2 3 4 5 6 7 8 9 10

Output 2:-
Yes
*/
function binarySearch(N, target, arr, start, end) {
    if (start > end) {
        return -1; //Not found the target
    }
    let middle = Math.ceil(start + (end - start) / 2);
    //3 checks of binary search - equals to target , greater then the target , less then the target

    //* 1 equals to the target
    if (arr[middle] === target) {
        return middle; //returns the index of the element
    }
    if (target < arr[middle]) {
       return binarySearch(N, target, arr, start, middle - 1); //end will change to middle
    }
    if (target > arr[middle]) {
       return binarySearch(N, target, arr, middle + 1, end); //start will change to middle
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let [N, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(binarySearch(N, k, arr, 0, N - 1));
}

runProgram(`5 6
1 2 3 4 5 6`);
runProgram(`10 8
1 2 3 4 5 6 7 8 9 10`);
