/* Given an array arr , to find if the array is sorted or not .

Input Format :-
First line contains N , the number of elements in the array followed by the items in the array in the next line.

Output Format :-
Print true if the array is sorted else print false .

Input 1 :-
5
1 2 3 4 5

Output 1 :-
true

Input 2 :-
5
1 4 6 3 5

Output 2 :-
false
*/
function isArrSorted(N, arr, index = 0) {
    if (index === N) {
        return true;
    }
    if (arr[index] > arr[index + 1]) {
        return false;
    }
    return isArrSorted(N, arr, (index = index + 1));
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(isArrSorted(N, arr));
}

runProgram(`5
1 2 3 4 5`);

runProgram(`5
1 2 8 4 5`);

runProgram(`10
5 6 8 9 4 5 6 8 6 8`);
