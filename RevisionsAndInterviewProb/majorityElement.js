/* 
* Find the majority element in the given array .
Majority element -> The element of which frequency is greater than half of the size of the array size is called the majority element.
Input 1 => 
[3,3,4,2,4,4,2,4,4]

Output 1=>
5
The frequency of 4 is 5 which is greater than the half of the size of the array size.

Input 2=>
[3,3,4,2,4,4,2,4]

Output 2=>
0
There is no element whose frequency is greater than the half of the size of the array.

Input Formt : - 
First line of input contain the no. of elements N
Second line contains the elements.
*/

// *Key Value Pair Solution Time Complexity -> O(N) Space Complexity => O(N)
function majorityElementKVP(N ,arr){
    let obj = {};
    for(let i = 0; i < N; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
    let max = 0;
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key];
        }
    }
    if(max > parseInt(N / 2)){
        return max;
    }else{
        return "No Majority Element";
    }
}

// * Bruteforce Solution Time Complexity -> O(N * N) . Space Compexity => O(1)
function majorityElementBruteforce(N ,arr){
    let maxCount = 0;
    for(let i = 0; i < N; i++){
        let count = 0;
        for(let j = 0; j < N; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if(count > maxCount){
            maxCount = count;
        }
    }
    if(maxCount > parseInt(N / 2)){
        return maxCount;
    }else{
        return "No Majority Element";
    }
}
//  * Sorting Approach Time Complexity - > O(NlogN) . Space Complexity O(1)
function majorityElementSorting(N ,arr){
    arr = arr.sort((a , b)=>{
        return a - b;
    })
    let maxCount = 1;
    let count = 1;
    for(let i = 0; i < N; i++){
        if(arr[i] === arr[i + 1]){
            count++;
        }else if(arr[i] !== arr[i + 1]){
            count = 1;
        }
        if(count > maxCount){
            maxCount = count;
        }
    }
    if(maxCount > parseInt(N / 2)){
        return maxCount;
    }else{
        return "No Majority Element";
    }
}

// *Sorting And Taking Half Approach. Time Complexity - > O(N + NlogN);
function majorityElementSortingTakingHalf(N ,arr){
    arr = arr.sort((a , b) =>{
        return a - b;
    });
    let half = parseInt(N / 2);
    for(let i = 0; i <= half; i++){
        if(arr[i] === arr[i + half]){
            return N -i;
        }
    }
    return "No Majority Element";
}

// * Using "Moore's Voting Algorithm" to find the majority element.  Time Complexity : O(N) + O(N) =O(N) and Space complexity O(1). 
function majorityElementMooresVotingAlgorithm(N ,arr){
    // Pass 1
    let majorityElement = randomK(N , arr);
    // Pass 2
    let count = 0;
    for(let i = 0; i < N; i++){
        if(majorityElement === arr[i]){
            count ++;
        }
    }
    if(count > parseInt(N / 2)){
        return count;
    }else{
        return "No Majority Element"
    }
}
// A Method of Moore's Voting Algorithm
function randomK(N ,arr){
    let majorityElem = 0;
    let count = 1;
    for(let i = 1; i < N; i++){
        if(arr[majorityElem] === arr[i]){
            count++;
        }else{
            count --;
        }
        // 
        if(count === 0){
            majorityElem = i;
            count = 1; 
        }
    }
    return arr[majorityElem];
}

/*
2 Passes
Pass 1 :- Moore's voting algorithm returns some random element as a majority element for now we can call it K

Pass 2 :- We need to verify 'k' is our majority element or not.
Why to use Moore's Voing Algorithm ?
It gives Time Complexity O(N) and space complexity O(1) best as compared to all the algorithms.
*/

function runProgram(input){
    input = input.trim().split("\n");
    let N = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    // console.log(majorityElementKVP(N, arr));
    // console.log(majorityElementBruteforce(N ,arr));
    // console.log(majorityElementSorting(N ,arr));
    // console.log(majorityElementSortingTakingHalf(N ,arr));
    console.log(majorityElementMooresVotingAlgorithm(N ,arr));
}

// * 2 2 3 3 4 4 4 4 4
runProgram(`9
3 3 4 2 4 4 2 4 4`)

runProgram(`8
3 3 4 2 4 4 2 4`)