/*
Largest Sum Contiguous Subarray
Given an array of size N , find the sum of largest subarray
arr = [-5 , 4 , 6 ,-3 , 4 ,-1]
*/
// Bruteforce TC -> O(N*N) , SC -> O(1)
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

//2 -> We can't apply any sorting approach for the same cauz it will disturb the order and in subarray problems order
// matters the most

// 3 -> If we try to solve the same with hashmaps/key value pairs then too once we to go to each subarray(O(N*N))
// thereforce no optimization on doing the same

// 4 -> Kadane's Algorithm
/*
Loop through the whole array and find the sum, but in any case if the sum is coming -ve then discart it and again 
start with the next element
*/

function largestSumContiguousSubArrKadanesAlgo(N, arr) {
    let maxSum = 0;
    let currSum = 0;
    for (let i = 0; i < N; i++) {
        currSum += arr[i];
        if (currSum > maxSum) {
            maxSum = currSum;
        }
        if (currSum <= 0) {
            currSum = 0;
        }
    }
    return maxSum;
}

console.log(largestSumContiguousSubArrKadanesAlgo(6, [-5, 4, 6, -3, 4, -1]))