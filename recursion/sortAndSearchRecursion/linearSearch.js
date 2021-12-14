/* Given an array of length N and an integer k ,find if the integer k exhists  in the array or not , if it does return its index else print -1

Input Format :-
First line of input contains N the number of elements in the array and and an integer k.
Second line contains the array itself.

Output Format :-
Print the index of the element k if it is present else print -1

Input 1:-
5 10
1 5 6 8 10

Output 1:-
4

Input 2 :-
10 30
20 60 50 90 40 65 89 45 85 79

Output2:-
-1
*/
function linearSearch(N, k, arr, index = 0) {
    if (index === N) {
        return -1;
    }
    if (arr[index] === k) {
        return index;
    }
    return linearSearch(N, k, arr, (index += 1));
}

function runProgram(input) {
    input = input.trim().split("\n");
    let [N, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(linearSearch(N, k, arr, 0));
}

runProgram(`5 2
1 2 3 4 5`);
