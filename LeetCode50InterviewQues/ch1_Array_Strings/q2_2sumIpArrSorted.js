/*
* Two Sum II – Input array is sorted
Given an array of integers, find two numbers such that they add up to a specific target 
number.
The function twoSum should return indices of the two numbers such that they add up to 
the target, where index1 must be less than index2. Please note that your returned answers 
(both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution
 ? NOTE:  Input array is already sorted in ascending order.
*/

// ? Time Complexity : O(N) 
// ? Space Complexity : O(1);
function twoSumTwoPointer(arr , N ,target){
    let low = 0;
    let high = N - 1;
    while(low < high){
        if(arr[low] + arr[high] === target){
            return [low + 1, high + 1];
        }else if(arr[low] + arr[high] > target){
            high--;
        }else if(arr[low] + arr[high] < target){
            low++;
        }
    }
    return -1;
}
// console.log(twoSumTwoPointer([1,2,3,4,5,6,7,8,9],9,5));

function binarySearch(N ,arr, k){
    let low = 0;
    let high = N -1;
    while(low <= high){
        let mid = low + parseInt((high - low) / 2);
        if(arr[mid] === k){
            return mid + 1;
        }else if(arr[mid] > k){
            high = mid - 1;
        }else if(arr[mid] < k){
            low = mid + 1;
        }
    }
    return false;
}

// ? Time Complexity : O(N logN) 
// ? Space Complexity : O(1);
function twoSumBinarySearch(arr ,N , target){
    for(let i = 0; i < N; i++){
       let ans = binarySearch(N, arr , k = target - arr[i]);
       if(ans){
        return [i + 1, ans];
       }
    }
    return -1;
}


console.log(twoSumBinarySearch([1,2,4,5,6,7,8,9],8,5));