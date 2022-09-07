/*
* Missing Ranges
Given a sorted integer array where the range of elements are [0, 99] inclusive, return its 
missing ranges. 
For example, given [0, 1, 3, 50, 75], return [“2”, “4->49”, “51->74”, “76->99”] 
Example Questions Candidate Might Ask: 
Q: What if the given array is empty? 
A: Then you should return [“0->99”] as those ranges are missing. Q: What if the given array contains all elements from the ranges? A: Return an empty list, which means no range is missing
*/

function missingRanges(arr){
    let N = arr.length;
    let numArr = new Array(10).fill(0);
    // same logic can be applied for 100 elements
    for(let i = 0; i < 10;i++){
        numArr[i] = i + 1;
    }
    let i = 0; 
    let j = 0;
    while(i < N){
        if(arr[i] === numArr[j]){
            i++;
            j++;
        }else{
            console.log(numArr[j]);
            j++;
        }
    }
}
missingRanges([1,3,5,7,9]);