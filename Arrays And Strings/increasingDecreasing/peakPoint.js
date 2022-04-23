/*
 * The Peak Point

Given an array of size n, which is strictly increasing and then strictly decreasing in order. Find out the index (0-based) which is the peak of the array.
Note that the extremities are not considered as peak and there exists a peak which is not at index 0 or at n-1.

Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (3 ≤ n ≤ 100000).

The second line of the test case contains n integers (1 ≤ Ai ≤ 100000) and they are all distinct in nature.

Output
For each test case, print the answer: The peak index.

Sample Input 1 
2
3
10 20 11
5
1 3 6 5 4

Sample Output 1
1
2
*/

function peakPoint(N , arr){
    console.log(N ,arr);
    for(let i = 0; i < N ; i++){
        if(arr[i] > arr[i + 1]){
            return i;
        }
    }
}

function runProgram(input){
    input = input.trim().split("\n");
    const testCases = parseInt(input[0]);
    let line = 1;
    for(let i = 0; i < testCases; i++){
        let N = parseInt(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(peakPoint(N , arr));
    }
}

runProgram(`2
3
10 20 11
5
1 3 6 5 4`)