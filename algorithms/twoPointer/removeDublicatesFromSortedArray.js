/* Given a sorted array arr, remove the dublicates in-place such that each element appears only once and returns the new length .
? Do not allocate extra space for another array, you must do this by modifying the input array in place with O(1) extra memeory
*/
function removeDublicatesFromSortedArray(arr)
{
    var N= arr.length;
    var count=0;
    for(var i=0;i<N;i++)
    {
        var j=i+1
            if(arr[i]!==arr[j])
            {
                count++;
            }
    }
    console.log(count);
}

removeDublicatesFromSortedArray([0,1,1,3,5,6,6])

// Sample Input - [0,1,1]
// Sample Output - 2 -- [0,1]
// ! Source - Leetcode