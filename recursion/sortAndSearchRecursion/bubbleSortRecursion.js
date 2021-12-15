/* Given the length of the array N and the elements of the array , sort the array using bubble sort by recursion . 

 *   Input Format :- 
 
    First line of input contains N the number of elements in the array
    Second line of input contains the array elements itself .

  *  Output Format :-
    Return and print the sorted array.
    
    Input :-
    5
    6 5 9 8 1

    Output :-
    1 5 6 8 9
*/
function bubbleSortRecursion(N, arr) {
    if (N === 1) {
        return arr;
    }
    for (let j = 0; j < N; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    return bubbleSortRecursion(N - 1, arr);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(bubbleSortRecursion(N, arr));
}

runProgram(`10
1 6 2 9 3 5 6 4 8 5 6`);
