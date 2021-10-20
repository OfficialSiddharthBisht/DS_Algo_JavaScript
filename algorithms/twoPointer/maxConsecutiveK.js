/* Given an array. To find the maximum number of consecutive Ks in the array */
function maxConsecutiveK(arr,K)
{
    var N=arr.length;
    var count=0;
    var maxCount=0;
    for(var i=0;i<N;i++)
    {
        if(arr[i]===K&&arr[i]===arr[i+1])
        {
            count++;
        }
        if(count>maxCount)
        {
            maxCount=count;
        }
    }
    console.log(maxCount);
}
maxConsecutiveK([1,1,0,1,1,1],1);

//Sample Input - arr=[1,1,0,1,1,1]  , K=1
// Sample Output - 3
//! Source - Leetcode

