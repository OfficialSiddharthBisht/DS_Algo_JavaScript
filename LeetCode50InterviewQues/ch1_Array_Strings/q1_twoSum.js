/*
* Two Sum
Given an array of integers, find two numbers such that they add up to a specific target 
number.
The function twoSum should return indices of the two numbers such that they add up to 
the target, where index1 must be less than index2. Please note that your returned answers 
(both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution
*/

// ? Time Complexity : O(N * N) 
// ? Space Complexity : O(1);
function twoSumBF(arr , N ,target){
    for(let i = 0; i < N ; i++){
        for(let j = i + 1; j < N; j++){
            if(arr[i] + arr[j] === target){
                return [i + 1 , j + 1];
            }
        }
    }
}
// console.log(twoSumBF([1,2,3,4,5,6,7,8,9],9,5));

// ? Time Complexity : O(N) 
// ? Space Complexity : O(N);
function twoSumKVP(arr , N ,target){
    let map = new Map();
    for(let i = 0; i < N; i++){
        map.set(i ,arr[i]);
    }
    for(let i = 0; i < N; i++){
        if(map.has(target - arr[i])){
            return [arr[i],target - arr[i]]
        }
    }
}
// console.log(twoSumKVP([1,2,3,4,5,6,7,8,9],9,5));



