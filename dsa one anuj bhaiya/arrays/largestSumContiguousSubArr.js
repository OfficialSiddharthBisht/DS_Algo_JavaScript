/*
Largest Sum Contiguous Subarray
Given an array of size N , find the sum of largest subarray
arr = [-5 , 4 , 6 ,-3 , 4 ,-1]
*/

function largestSumContiguousSubArr(N, arr) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < N; i++) {
        let sum = 0;
        for (let j = i; j < N; j++) {
            sum += arr[j];
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}

console.log(largestSumContiguousSubArr(6, [-5, 4, 6, -3, 4, -1]))