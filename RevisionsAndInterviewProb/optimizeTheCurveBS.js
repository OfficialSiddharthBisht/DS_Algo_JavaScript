function optimizeTheCurve(A , B , C ,k){
    let low = 0;
    let high = k;
    let ans = -1;
    while(low <= high){
        let mid = low + parseInt((high - low ) / 2);
        let val = (A * mid * mid) + (B * mid) + C;
        if(val >= k){
            high = mid - 1;
            ans = mid;
        }
        else{
            low = mid + 1;
        }
    }
    if(ans <= 0){
        return -1;
    }else{
        return ans;
    }
}

console.log(optimizeTheCurve(3 , 2, 4, 15));