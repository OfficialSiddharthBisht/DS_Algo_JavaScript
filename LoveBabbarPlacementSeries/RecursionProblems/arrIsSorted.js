/*
Given an array arr ,to find the array is sorted or not using recursion
*/

function isSorted(arr , size) {
    //base case
    if(size === 1 || size === 0){
        return true;
    }  
    if(arr[0] > arr[1]){
        return false;
    }else{
        isSorted(arr + 1 , size - 1); //! subArr(arr[i + 1])
    }
}

let arr = [2,4,6,9,11,13];
console.log(isSorted(arr, arr.length));