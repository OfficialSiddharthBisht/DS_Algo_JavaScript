function packersAndMovers(arr , k){
    if(k < 0){
        return 0;
    }
    if(k === 0){
        return 1;
    }
    let ans = 0;
    for(let i = 0; i < arr.length; i++){
       ans += packersAndMovers(arr , k - arr[i]);
    }
    return ans;
}

let arr = [1,2,3];
let k = 3; 
console.log(packersAndMovers(arr ,k));