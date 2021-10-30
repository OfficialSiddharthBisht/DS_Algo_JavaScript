// Source leetcode - https://leetcode.com/problems/running-sum-of-1d-array/
/*
*/
let nums=[1,2,3,4]
let N=nums.length;
let runSum=0;
var ans=[];
for(var i=0;i<N;i++)
{
    runSum+=nums[i];
    // console.log(runSum);
    ans.push(runSum);
}
console.log(ans);