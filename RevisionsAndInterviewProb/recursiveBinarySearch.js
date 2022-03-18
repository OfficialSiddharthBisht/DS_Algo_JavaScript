function binarySearch(arr , target , low = 0, high = arr.length - 1){
    let mid = low + parseInt((high - low) / 2);
    if(arr[mid] === target){
        return mid;
    }
    if(arr[mid] > target){
        return binarySearch(arr , target , low , high = mid - 1);
    }
    else if(arr[mid] < target){
        return binarySearch(arr , target , low = mid + 1, high);
    }
    else {
        return - 1;
    }
}

console.log(binarySearch([1 , 2, 3, 4, 5, 6, 7, 8, 9, 10] ,7));