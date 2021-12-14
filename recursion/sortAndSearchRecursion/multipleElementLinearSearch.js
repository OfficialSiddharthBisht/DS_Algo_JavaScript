/* Given an array of length N and an integer k , find all the indexes where k exhists in the array arr ,if it dosen't exhist return an empty array .

Input Format :-
First line of input contains N the number of elements in the array and and an integer k.
Second line contains the array itself.

Output Format :-
Push all the indexes of the element k if it is present else return empty array

Input 1:-
5 10
1 5 10 8 10

Output 1:-
[2,4]

Input 2 :-
10 30
20 60 50 90 40 65 89 45 85 79

Output2:-
[]
*/
function multipleLinearSearch(N, k, arr, index = 0, indexArr) {
    if (index === N) {
        return indexArr;
    }
    if (arr[index] === k) {
        indexArr.push(index);
    }
    return multipleLinearSearch(N, k, arr, (index += 1), indexArr);
}

function runProgram(input) {
    input = input.trim().split("\n");
    let [N, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let indexArr = [];
    console.log(multipleLinearSearch(N, k, arr, 0, indexArr));
}
runProgram(`5 10
1 5 10 8 10`);
runProgram(`10 6
1 2 3 4 5 6 7 8 9 6`)
