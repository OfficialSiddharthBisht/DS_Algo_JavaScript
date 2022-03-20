function twoSumBruteForce1(arr , target){
    let N = arr.length;
    for(let i = 0; i < N; i++){
       let newTarget = target - arr[i];

       for(let j = i + 1; j < N; j++){
           if(arr[j] === newTarget){
               return [i , j]
           }
       }
    }
}

function twoSumBruteForce2(arr , target){
    let N = arr.length;
    for(let i = 0; i < N; i++){
        let temp = target - arr[i];
        for(let j = i + 1; j < N; j++){
            if(arr[j] === temp){
                return [i , j]
            }
        }
    }
}

function twoSum(arr , target){
    
}
console.log(twoSum([2,7,11,15],9));
console.log(twoSumBruteForce2([3,2,4],6));


//! Cannot Be Solved By 2 pointer approach cauz we have to return the index and if we sort the array then the index will get messed 
// function twoSum(arr , target){
//     let i = 0;
//     let j = arr.length - 1;
//     while(i < j ){
//         if(arr[i] + arr[j] === target){
//             console.log(arr[i], arr[j]);
//             return [i , j];
//         }
//         else if(arr[i] + arr[j] > target){
//             j--;
//         }
//         else if(arr[i] + arr[j] < target){
//             i++;
//         }
//     }
//     return - 1;
// }