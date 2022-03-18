function squareRoot(N){
    let low = 0;
    let high = N
    while(low < high){
        let mid = low + parseInt((high - low) / 2);
        if((mid * mid) === N){
            return mid;
        }
        if((mid * mid) > N){
            high = mid - 1;
        }
        if((mid * mid) < N){
            low = low + 1;
        }
    }
    return low;
}

console.log(squareRoot(25));
console.log(squareRoot(36));
console.log(squareRoot(20));
console.log(squareRoot(48));
console.log(squareRoot(32));