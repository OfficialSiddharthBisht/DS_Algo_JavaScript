function lowerBound(arr , target){
    let low = 0; 
    let high = arr.length - 1;
    let possibleLB = -1;
    while(low < high){
        let mid = low + parseInt((high - low ) / 2);
        if(arr[mid] >= target){
            if(arr[mid] === target){
                possibleLB = mid;
            }
            high = mid;
        }
        if(arr[mid] < target){
            low = mid + 1;
        }
    }
    return possibleLB;
}

// console.log(lowerBound([2,3,5,7,11,11,13,17,19,23,29],11));
console.log(lowerBound([1,2,6,6,6,7],6));