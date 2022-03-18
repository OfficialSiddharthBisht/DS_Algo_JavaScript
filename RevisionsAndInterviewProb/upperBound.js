function upperBound(arr , target){
    let low = 0;
    let high = arr.length - 1;
    let possibleUB = -1;
    while(low < high){
        let mid = low + parseInt((high - low) / 2);
        if(arr[mid] <= target){
            if(arr[mid] === target){
                possibleUB = mid;
            }
            low = mid + 1;
        }
        else if(arr[mid] > target){
            high = mid - 1;
        }
    }
    return possibleUB;
}

console.log(upperBound([1,2,6,6,6,6,7],6));