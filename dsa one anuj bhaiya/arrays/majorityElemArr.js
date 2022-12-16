/*
Given an array arr of size N, find the majority elemnet in the array, majority element exhists more then N/2  times in the array
arr = [5,1,4,1,1]
N = 5
freq(majority elem) > 5 / 2 i.e 2;
ans => 1 as it comes 3 times in the array
*/

// * Bruteforce O(N * N) TC , O(1) SC
function majorityElemBF(arr, N) {
    let majElem = -1;
    let maxCount = 0;
    for (let i = 0; i < N; i++) {
        let count = 0;
        for (let j = i + 1; j < N; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count > maxCount) {
            maxCount = count;
            majElem = arr[i];
        }
    }
    if (maxCount >= Math.floor(N / 2)) {
        return majElem;
    }
}
console.log(majorityElemBF([5, 1, 4, 5, 5], 5));