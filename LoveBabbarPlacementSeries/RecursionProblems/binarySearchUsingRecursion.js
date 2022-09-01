// ? Binary Search Using Recursion : 
// Given an array and a target element K find if k is present in the array if yes then find its index else return -1

function binarySearchRecursion(arr, target, low = 0, high = arr.length - 1) {
    let mid = low + parseInt((high - low) / 2);
    //base case
    if (arr[mid] === target) {
        return mid;
    }
    if (low > high) {
        return -1;
    } else {
        if (arr[mid] < target) {
            return binarySearchRecursion(arr, target, low = mid + 1, high);
        } else if (arr[mid] > target) {
            return binarySearchRecursion(arr, target, low, high = mid - 1);
        }
    }
}


console.log(binarySearchRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9], 11));